import * as migration_20250329_110735 from './20250329_110735';
import * as migration_20250406_180350 from './20250406_180350';
import * as migration_20250525_090358 from './20250525_090358';

export const migrations = [
  {
    up: migration_20250329_110735.up,
    down: migration_20250329_110735.down,
    name: '20250329_110735',
  },
  {
    up: migration_20250406_180350.up,
    down: migration_20250406_180350.down,
    name: '20250406_180350',
  },
  {
    up: migration_20250525_090358.up,
    down: migration_20250525_090358.down,
    name: '20250525_090358'
  },
];
