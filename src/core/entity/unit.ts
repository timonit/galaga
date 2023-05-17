import { DisplayObject, Sprite } from 'pixi.js';
import { Entity } from './entity';
import { Bodies, Body } from 'matter-js';
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
    const {
      position: { x, y },
      width,
      height,
    } = this.state;
    this.sprite.width = width;
    this.sprite.height = height;
    this.sprite.anchor.set(0.5);
    this.sprite.position.set(x, y);
    this.body = Bodies.rectangle(x, y, width, height);
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
