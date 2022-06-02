export type StorageConfig = {
  type: 'localStorage' | 'sessionStorage';
  expire: number; // 过期时间
};

export type StorageData = {
  value: any; // 存储值
  time: number; // 存值的时间
  expire: number; // 过期时间
};

export type StorageItem = {
  key: string;
  value: string | null;
};
