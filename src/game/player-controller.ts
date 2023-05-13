import { Unit } from '../core/entity/unit';

export function playerController(unit: Unit) {
  document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case 'KeyW': {
        unit.pressUp = true;
        break;
      }
      case 'KeyS': {
        unit.pressDown = true;
        break;
      }
      case 'KeyA': {
        unit.pressLeft = true;
        break;
      }
      case 'KeyD': {
        unit.pressRight = true;
        break;
      }
      case 'Space': {
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
        unit.pressDown = false;
        break;
      }
      case 'KeyW': {
        unit.pressUp = false;
        break;
      }
      case 'KeyD': {
        unit.pressRight = false;
        break;
      }
      case 'KeyA': {
        unit.pressLeft = false;
        break;
      }
    }
  });
}

