import { Entity } from './entity';
import { MovableState } from './movable-state';
import { canMove } from '../utils/can-move';

export abstract class Movable<
  STATE extends MovableState = MovableState
> extends Entity<STATE> {
  movable = true;

  moveUp = 0;
  moveDown = 0;
  moveRight = 0;
  moveLeft = 0;

  setSpeed(value: number) {
    this.state.speed = value;
  }

  canMove (x: number, y: number): boolean {
    return canMove(this, x, y);
  };
}
