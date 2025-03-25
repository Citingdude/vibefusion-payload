import * as migration_20250325_191307 from './20250325_191307';
import * as migration_20250325_195552 from './20250325_195552';

export const migrations = [
  {
    up: migration_20250325_191307.up,
    down: migration_20250325_191307.down,
    name: '20250325_191307',
  },
  {
    up: migration_20250325_195552.up,
    down: migration_20250325_195552.down,
    name: '20250325_195552'
  },
];
