import { Body, Engine } from 'matter-js';
import { Unit } from '../core/entity/unit';
import { EntityState } from '../core/entity/entity-state';

export class Hero extends Unit {
  unitType = 'hero';

  pressUp = false;
  pressDown = false;
  pressRight = false;
  pressLeft = false;
}
