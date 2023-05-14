import { Body, Engine } from 'matter-js';
import { Hero } from './hero';

const canMove = (unit: Hero, x: number, y: number) => {
  Body.setPosition(unit.body, { x, y });
  Engine.update(unit.game.phisicalEngine);

  if (unit.game.phisicalEngine.pairs.list.length) {
    const unitBody = unit.game.phisicalEngine.detector.bodies.find(
      (body) => body.id === unit.body.id
    );

    Body.setPosition(unit.body, {
      // @ts-ignore
      x: unitBody.positionPrev.x,
      // @ts-ignore
      y: unitBody.positionPrev.y,
    });

    return false;
  }
  return true;
};

export function calculatePosition(unit: Hero) {
  if (unit.pressUp) {
    const y = unit.state.position.y - unit.state.speed;

    if (canMove(unit, unit.state.position.x, y)) {
      unit.setPosition(unit.state.position.x, y);
      unit.sprite.position.x = unit.state.position.x;
      unit.sprite.position.y = unit.state.position.y;
    }
  }
  if (unit.pressDown) {
    const y = unit.state.position.y + unit.state.speed;

    if (canMove(unit, unit.state.position.x, y)) {
      unit.setPosition(unit.state.position.x, y);
      unit.sprite.position.x = unit.state.position.x;
      unit.sprite.position.y = unit.state.position.y;
    }
  }
  if (unit.pressRight) {
    const x = unit.state.position.x + unit.state.speed;

    if (canMove(unit, x, unit.state.position.y)) {
      unit.setPosition(x, unit.state.position.y);
      unit.sprite.position.x = unit.state.position.x;
      unit.sprite.position.y = unit.state.position.y;
    }
  }
  if (unit.pressLeft) {
    const x = unit.state.position.x - unit.state.speed;

    if (canMove(unit, x, unit.state.position.y)) {
      unit.setPosition(x, unit.state.position.y);
      unit.sprite.position.x = unit.state.position.x;
      unit.sprite.position.y = unit.state.position.y;
    }
  }
}
