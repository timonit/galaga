import { Application } from 'pixi.js';

export class Game {
  app: Application;

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

    document.body.append(this.view as HTMLCanvasElement);
  }
}
