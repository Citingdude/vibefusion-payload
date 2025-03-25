import * as migration_20250325_191307 from './20250325_191307';
import * as migration_20250325_195552 from './20250325_195552';
import * as migration_20250325_201058 from './20250325_201058';
import * as migration_20250325_201200 from './20250325_201200';
import * as migration_20250325_201716 from './20250325_201716';

export const migrations = [
  {
    up: migration_20250325_191307.up,
    down: migration_20250325_191307.down,
    name: '20250325_191307',
  },
  {
    up: migration_20250325_195552.up,
    down: migration_20250325_195552.down,
    name: '20250325_195552',
  },
  {
    up: migration_20250325_201058.up,
    down: migration_20250325_201058.down,
    name: '20250325_201058',
  },
  {
    up: migration_20250325_201200.up,
    down: migration_20250325_201200.down,
    name: '20250325_201200',
  },
  {
    up: migration_20250325_201716.up,
    down: migration_20250325_201716.down,
    name: '20250325_201716'
  },
];
