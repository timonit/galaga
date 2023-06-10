import { EntityState } from './entity-state';

export interface MovableState extends EntityState {
  speed: number;
}
