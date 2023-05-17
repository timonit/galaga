import { Graphics, Sprite } from 'pixi.js';
import { Entity } from '../core/entity/entity';
import { EntityState } from '../core/entity/entity-state';
import { UnitState } from '../core/entity/unit-state';
import { canMove } from './calculatePosition';
import { Bodies, Body, Composite } from 'matter-js';
import { Unit } from '../core/entity/unit';
import { Hero } from './hero';

interface ProjectileState extends EntityState {
  speed: number;
  width: number;
  height: number;
}

export class Projectile extends Entity<ProjectileState> {
  entityName = 'projectile';

  sprite: Graphics | Sprite;

  body: Body;

  owner: Hero;

  move() {
    const y = this.state.position.y - this.state.speed;

    if (canMove(this as unknown as Unit, this.state.position.x, y)) {
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

  bodyPivote: {x: number, y: number} ;

  init(state: UnitState): void {
    super.init(state);
    const {
      position: { x, y },
      width,
      height,
    } = this.state;

    const sprite = Sprite.from('/assets/box.png');
    sprite.position.set(x, y);
    sprite.width = width;
    sprite.height = height;
    sprite.anchor.set(0.5);
    this.sprite = sprite;

    this.body = Bodies.rectangle(x, y, width, height);
    this.game.app.stage.addChild(this.sprite);
    Composite.add(this.game.phisicalEngine.world, [this.body]);
    this.start();
  }
}
