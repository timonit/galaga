import { Hero } from './hero';

export function calculatePosition(unit: Hero) {
  if (unit.moveUp) {
    const y = unit.state.position.y - unit.moveUp;

    if (unit.canMove(unit.state.position.x, y)) {
      unit.setPosition(unit.state.position.x, y);
      unit.sprite.position.x = unit.state.position.x;
      unit.sprite.position.y = unit.state.position.y;
    }
  }
  if (unit.moveDown) {
    const y = unit.state.position.y + unit.moveDown;

    if (unit.canMove(unit.state.position.x, y)) {
      unit.setPosition(unit.state.position.x, y);
      unit.sprite.position.x = unit.state.position.x;
      unit.sprite.position.y = unit.state.position.y;
    }
  }
  if (unit.moveRight) {
    const x = unit.state.position.x + unit.moveRight;

    if (unit.canMove(x, unit.state.position.y)) {
      unit.setPosition(x, unit.state.position.y);
      unit.sprite.position.x = unit.state.position.x;
      unit.sprite.position.y = unit.state.position.y;
    }
  }
  if (unit.moveLeft) {
    const x = unit.state.position.x - unit.moveLeft;

    if (unit.canMove(x, unit.state.position.y)) {
      unit.setPosition(x, unit.state.position.y);
      unit.sprite.position.x = unit.state.position.x;
      unit.sprite.position.y = unit.state.position.y;
    }
  }
}
