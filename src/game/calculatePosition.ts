import { Unit } from '../core/entity/unit';

export function calculatePosition(unit: Unit) {
  if (unit.pressUp) {
    unit.setPosition(
      unit.state.position.x,
      unit.state.position.y - unit.state.speed
    );
  }
  if (unit.pressDown) {
    unit.setPosition(
      unit.state.position.x,
      unit.state.position.y + unit.state.speed
    );
  }
  if (unit.pressRight) {
    unit.setPosition(
      unit.state.position.x + unit.state.speed,
      unit.state.position.y
    );
  }
  if (unit.pressLeft) {
    unit.setPosition(
      unit.state.position.x - unit.state.speed,
      unit.state.position.y
    );
  }
}
