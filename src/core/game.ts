import { Engine } from 'matter-js';
import { Application } from 'pixi.js';

export class Game {
  app: Application;

  phisicalEngine: Engine;

  width = 600;

  height = 600;

  background = '333';

  get view() {
    return this.app.view;
  }

  get stage() {
    return this.app.stage;
  }

  init() {
    this.app = new Application({
      width: this.width,
      height: this.height,
      background: this.background,
    });

    this.phisicalEngine = Engine.create({ gravity: { x: 0, y: 0 } });

    document.body.append(this.view as HTMLCanvasElement);
  }
}
