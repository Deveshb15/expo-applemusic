import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoApplemusicViewProps } from './ExpoApplemusic.types';

const NativeView: React.ComponentType<ExpoApplemusicViewProps> =
  requireNativeViewManager('ExpoApplemusic');

export default function ExpoApplemusicView(props: ExpoApplemusicViewProps) {
  return <NativeView {...props} />;
}
