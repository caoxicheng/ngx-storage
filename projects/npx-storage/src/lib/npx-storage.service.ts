import { Injectable } from '@angular/core';
import { StorageConfig, StorageData, StorageItem } from './npx-storage.model';

@Injectable({
  providedIn: 'root',
})
export class NpxStorageService {
  private config: StorageConfig = {
    type: 'localStorage',
    expire: 1,
  };

  constructor() {}

  setStorage(key: string, value: any, expire: number = 0): void {
    if (value === '' || value === undefined || value !== value) {
      value = null;
    }

    expire = (expire ? expire : this.config.expire) * 1000;

    const data: StorageData = {
      value,
      time: Date.now(),
      expire,
    };

    try {
      window[this.config.type].setItem(key, JSON.stringify(data));
    } catch (error) {
      throw error;
    }
  }

  getStorage(key: string): any {
    if (
      !window[this.config.type].getItem(key) ||
      JSON.parse(window[this.config.type].getItem(key)!) === null
    ) {
      return null;
    }

    const storage = JSON.parse(window[this.config.type].getItem(key) as string);
    console.log(storage);
    const nowTime = Date.now();
    console.log(this.config.expire * 1000, nowTime - storage.time);

    // 过期删除
    if (storage.expire && storage.expire < nowTime - storage.time) {
      this.removeStorage(key);
      return null;
    } else {
      this.setStorage(key, storage.value);
      return storage.value;
    }
  }

  getAllStorage(): Array<StorageItem> {
    const len = window[this.config.type].length; // 获取长度

    const result = [];
    for (let i = 0; i < len; i++) {
      const getKey = window[this.config.type].key(i)!;
      const getValue = window[this.config.type].getItem(getKey!);
      result[i] = {
        key: getKey,
        value: getValue,
      };
    }
    return result;
  }

  removeStorage(key: string): void {
    window[this.config.type].removeItem(key);
  }

  clearStorage(): void {
    window[this.config.type].clear();
  }
}
