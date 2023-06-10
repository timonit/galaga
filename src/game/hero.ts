import { Sprite } from 'pixi.js';
import { Movable } from '../core/entity/movable';
import { Projectile } from './projectile';

export class Hero extends Movable {
  entityType = 'hero';

  shot() {
    const { x, y } = {
      x: this.state.position.x,
      y: this.state.position.y - (this.state.height/2+5),
    };
    const width = 10;
    const height = 10;
    
    const projectile = new Projectile(this.game);
    const sprite = Sprite.from('/assets/box.png');
    projectile.owner = this;
    projectile.sprite = sprite;
    projectile.init({
      width,
      height,
      position: { x, y },
      speed: 10,
    });
  }
}
