import { Sprite } from 'pixi.js';
import { Entity } from './entity';
import { EntityState } from './entity-state';

export abstract class Unit<
  STATE extends EntityState = EntityState
> extends Entity<STATE> {
  abstract unitType: string;

  entityName = 'unit';

  sprite: Sprite;

  pressUp = false;
  pressDown = false;
  pressRight = false;
  pressLeft = false;

  setPosition(x: number, y: number) {
    this.state.position = { x, y };
  }

  init(state: STATE): void {
    super.init(state);
    this.state.position = { x: state.position.x, y: state.position.y };
    this.sprite.position.x = this.state.position.x;
    this.sprite.position.y = this.state.position.y;
  }
}
