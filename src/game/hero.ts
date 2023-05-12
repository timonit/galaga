import { Body } from 'matter-js';
import { Unit } from '../core/entity/unit';
import { EntityState } from '../core/entity/entity-state';

export class Hero extends Unit {
  unitType = 'hero';

  body: Body;

  init(state: EntityState): void {
    super.init(state);
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

  setPosition(x: number, y: number): void {
    super.setPosition(x, y);
    Body.setPosition(this.body, { x, y });
  }
}
