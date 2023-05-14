import { ObservablePoint } from 'pixi.js';
import { IPosition } from '../i-position';
import { EntityState } from './entity-state';

export interface UnitState extends EntityState {
  width: number;
  height: number;
  speed: number;
}
