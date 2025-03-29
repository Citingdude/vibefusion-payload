import * as migration_20250329_110735 from './20250329_110735';

export const migrations = [
  {
    up: migration_20250329_110735.up,
    down: migration_20250329_110735.down,
    name: '20250329_110735'
  },
];
