import { Game } from '../game';
import { EntityState } from './entity-state';

export abstract class Entity<STATE extends EntityState = EntityState> {
  game: Game;

  state: STATE;

  abstract entityName: string;

  constructor(game: Game) {
    this.game = game;
  }

  setPosition(x: number, y: number) {
    this.state.position = { x, y };
  }
  
  init(state: STATE) {
    this.state = state;
  }
}
