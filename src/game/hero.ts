import { Game } from '../core/game';
import { Body, Engine } from 'matter-js';
import { Unit } from '../core/entity/unit';
import { EntityState } from '../core/entity/entity-state';

export class Hero extends Unit {
  unitType = 'hero';

  phisicEngine: Engine;

  body: Body;

  constructor(game: Game, engine: Engine) {
    super(game);
    this.phisicEngine = engine;
  }

  init(state: EntityState): void {
    super.init(state);
    this.body = Body.create({
      position: { x: this.state.position.x, y: this.state.position.y },
      vertices: [
        { x: 0, y: 0 },
        { x: 0 + 45, y: 0 },
        { x: 0 + 45, y: 0 + 45 },
        { x: 0, y: 0 + 45 },
      ],
    });
  }
}
