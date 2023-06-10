import { Hero } from './hero';

export function playerController(unit: Hero) {
  document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case 'KeyW': {
        unit.moveUp = unit.state.speed;
        break;
      }
      case 'KeyS': {
        unit.moveDown = unit.state.speed;
        break;
      }
      case 'KeyA': {
        unit.moveLeft = unit.state.speed;
        break;
      }
      case 'KeyD': {
        unit.moveRight = unit.state.speed;
        break;
      }
      case 'Space': {
        unit.shot();
        break;
      }
      case 'KeyE': {
        unit.state.speed += 0.5;
        break;
      }
      default: {
        console.log(e.code, unit.state.speed);
      }
    }
  });

  document.addEventListener('keyup', (e) => {
    switch (e.code) {
      case 'KeyS': {
        unit.moveDown = 0;
        break;
      }
      case 'KeyW': {
        unit.moveUp = 0;
        break;
      }
      case 'KeyD': {
        unit.moveRight = 0;
        break;
      }
      case 'KeyA': {
        unit.moveLeft = 0;
        break;
      }
    }
  });
}

