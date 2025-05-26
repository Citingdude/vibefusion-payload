import * as migration_20250329_110735 from './20250329_110735';
import * as migration_20250406_180350 from './20250406_180350';
import * as migration_20250525_090358 from './20250525_090358';
import * as migration_20250525_133631 from './20250525_133631';
import * as migration_20250526_182720 from './20250526_182720';
import * as migration_20250526_184332 from './20250526_184332';
import * as migration_20250526_184503 from './20250526_184503';

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
    name: '20250525_090358',
  },
  {
    up: migration_20250525_133631.up,
    down: migration_20250525_133631.down,
    name: '20250525_133631',
  },
  {
    up: migration_20250526_182720.up,
    down: migration_20250526_182720.down,
    name: '20250526_182720',
  },
  {
    up: migration_20250526_184332.up,
    down: migration_20250526_184332.down,
    name: '20250526_184332',
  },
  {
    up: migration_20250526_184503.up,
    down: migration_20250526_184503.down,
    name: '20250526_184503'
  },
];
