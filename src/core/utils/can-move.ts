import { Body, Engine } from 'matter-js';
import { Movable } from '../entity/movable';

export const canMove = (unit: Movable, x: number, y: number) => {
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
