import { Entity } from '../core/entity/entity';
import { EntityState } from '../core/entity/entity-state';
import { MovableState } from '../core/entity/movable-state';
import { canMove } from '../core/utils/can-move';
import { Body, Composite } from 'matter-js';
import { Movable } from '../core/entity/movable';
import { Hero } from './hero';

interface ProjectileState extends EntityState {
  speed: number;
  width: number;
  height: number;
}

export class Projectile extends Entity<ProjectileState> {
  entityType = 'projectile';

  body: Body;

  owner: Hero;

  canMove(x: number, y: number) {
    return canMove(this as unknown as Movable, this.state.position.x, y);
  }

  move() {
    const y = this.state.position.y - this.state.speed;

    if (this.canMove(this.state.position.x, y)) {
      this.setPosition(this.state.position.x, y);
      this.sprite.position.y = this.state.position.y;
    } else this.finish();
  }

  start() {
    this.game.app.ticker.add(this.move, this);
  }

  finish() {
    this.game.app.ticker.remove(this.move, this);
    this.game.app.stage.removeChild(this.sprite);
    Composite.remove(this.game.phisicalEngine.world, this.body);
  }

  init(state: MovableState): void {
    super.init(state);
    this.start();
  }
}
