import { Sprite } from 'pixi.js';
import { Entity } from './entity';
import { EntityState } from './entity-state';

export abstract class Unit<STATE extends EntityState = EntityState> extends Entity<STATE> {
  abstract unitType: string;

  entityName = 'unit';

  sprite: Sprite;

  setPosition(x: number, y: number) {
    this.sprite.position.x = x;
    this.sprite.position.y = y;
  }

  init(state: STATE): void {
    super.init(state);
    this.setPosition(state.position.x, state.position.y);
  }
}
