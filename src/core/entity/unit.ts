import { Sprite } from 'pixi.js';
import { Entity } from './entity';
import { EntityState } from './entity-state';
import { Body } from 'matter-js';
import { UnitState } from './unit-state';

export abstract class Unit<
  STATE extends UnitState = UnitState
> extends Entity<STATE> {
  abstract unitType: string;

  entityName = 'unit';

  sprite: Sprite;

  body: Body;

  init(state: STATE): void {
    super.init(state);
    this.state.position = { x: state.position.x, y: state.position.y };
    this.sprite.position.x = this.state.position.x;
    this.sprite.position.y = this.state.position.y;

    this.body = Body.create({
      position: { x: this.state.position.x, y: this.state.position.y },
      vertices: [
        { x: 0, y: 0 },
        { x: 0 + 50, y: 0 },
        { x: 0 + 50, y: 0 + 50 },
        { x: 0, y: 0 + 50 },
      ],
    });
  }

  setSpeed(value: number) {
    this.state.speed = value;
  }

  setWidth(value: number) {
    this.state.width = value;
  }

  setHeight(value: number) {
    this.state.height = value;
  }
}
