import ExpoModulesCore
import MusicKit

public class ExpoApplemusicModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoApplemusic")

    Events("onChange")
    
    AsyncFunction("fetchUserToken") { (developerToken: String) -> String in
      do {
        if #available(iOS 15.0, *) {
          // authorize first
          let authStatus = await MusicAuthorization.request()
          switch authStatus {
          case .authorized:
            let token = try await MusicUserTokenProvider().userToken(for: developerToken, options: MusicTokenRequestOptions.ignoreCache)
            return token
          case .denied, .restricted, .notDetermined:
            print("Authorization status not appropriate")
            return ""
          @unknown default:
            print("Unknown authorization status")
            return ""
          }
        } else {
          // Fallback on earlier versions
          return ""
        }
      } catch {
        return ""
      }
    }
    
    View(ExpoApplemusicView.self) {
      Prop("name") { (view: ExpoApplemusicView, prop: String) in
        print(prop)
      }
    }
  }
}
