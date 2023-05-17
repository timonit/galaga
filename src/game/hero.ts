import { Unit } from '../core/entity/unit';
import { Projectile } from './projectile';

export class Hero extends Unit {
  unitType = 'hero';

  pressUp = false;
  pressDown = false;
  pressRight = false;
  pressLeft = false;

  shot() {
    const { x, y } = {
      x: this.state.position.x,
      y: this.state.position.y - (this.state.height/2+5),
    };
    const width = 10;
    const height = 10;
    
    const projectile = new Projectile(this.game);
    projectile.owner = this;
    projectile.init({
      width,
      height,
      position: { x, y },
      speed: 10,
    });
  }
}
