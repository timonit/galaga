import { Sprite } from 'pixi.js';
import { Game } from '../game';
import { EntityState } from './entity-state';
import { Bodies, Body, Composite } from 'matter-js';

export abstract class Entity<STATE extends EntityState = EntityState> {
  game: Game;

  state: STATE;

  sprite: Sprite;
  
  body: Body;

  abstract entityType: string;

  constructor(game: Game) {
    this.game = game;
  }

  init(state: STATE) {
    this.state = state;
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

    this.game.app.stage.addChild(this.sprite);
    Composite.add(this.game.phisicalEngine.world, [this.body]);
  }

  setPosition(x: number, y: number) {
    this.state.position = { x, y };
  }
  
  setWidth(value: number) {
    this.state.width = value;
  }

  setHeight(value: number) {
    this.state.height = value;
  }
}
