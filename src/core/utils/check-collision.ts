import { Entity } from '../entity/entity';

export function checkCollision(obj1: Entity, obj2: Entity) {
  var XColl = false;
  var YColl = false;

  if (
    obj1.state.position.x + obj1.state.position.width >=
      obj2.state.position.x &&
    obj1.state.position.x <= obj2.state.position.x + obj2.state.position.width
  ) {
    XColl = true;
  }
  if (
    obj1.state.position.y + obj1.state.position.height >=
      obj2.state.position.y &&
    obj1.state.position.y <= obj2.state.position.y + obj2.state.position.height
  ) {
    YColl = true;
  }

  if (XColl && YColl) return true;
  return false;
}
