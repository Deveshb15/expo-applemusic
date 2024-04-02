import * as React from 'react';

import { ExpoApplemusicViewProps } from './ExpoApplemusic.types';

export default function ExpoApplemusicView(props: ExpoApplemusicViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
