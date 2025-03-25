import * as migration_20250325_191307 from './20250325_191307';

export const migrations = [
  {
    up: migration_20250325_191307.up,
    down: migration_20250325_191307.down,
    name: '20250325_191307'
  },
];
