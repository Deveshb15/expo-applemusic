import { EventEmitter } from 'expo-modules-core';

const emitter = new EventEmitter({} as any);

export default {
  async setValueAsync(value: string): Promise<void> {
    emitter.emit('onChange', { value });
  },
  async fetchUserToken(developerToken: string): Promise<string> {
    return developerToken;
  },
};
