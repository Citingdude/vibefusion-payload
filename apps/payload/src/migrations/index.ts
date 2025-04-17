import * as migration_20250329_110735 from './20250329_110735';
import * as migration_20250406_180350 from './20250406_180350';

export const migrations = [
  {
    up: migration_20250329_110735.up,
    down: migration_20250329_110735.down,
    name: '20250329_110735',
  },
  {
    up: migration_20250406_180350.up,
    down: migration_20250406_180350.down,
    name: '20250406_180350'
  },
];
