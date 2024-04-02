import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoApplemusic.web.ts
// and on native platforms to ExpoApplemusic.ts
import ExpoApplemusicModule from './ExpoApplemusicModule';
import ExpoApplemusicView from './ExpoApplemusicView';
import { ChangeEventPayload, ExpoApplemusicViewProps } from './ExpoApplemusic.types';

// Get the native constant value.
export const PI = ExpoApplemusicModule.PI;

export function hello(): string {
  return ExpoApplemusicModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoApplemusicModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoApplemusicModule ?? NativeModulesProxy.ExpoApplemusic);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoApplemusicView, ExpoApplemusicViewProps, ChangeEventPayload };
