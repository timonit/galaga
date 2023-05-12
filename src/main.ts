import { Composite, Engine, Events } from 'matter-js';
import { Game } from './core/game';
import { calculatePosition } from './game/calculatePosition';
import { HeroFactory } from './game/hero-factory';
import { playerController } from './game/player-controller';

const game = new Game();
game.init();
const engine = Engine.create({gravity: {x: 0, y:0 }});

const factory = new HeroFactory(game);
const hero = factory.createHero();
const hero2 = factory.createHero({x: 200, y: 200});
game.stage.addChild(hero.sprite);
game.stage.addChild(hero2.sprite);

playerController(hero);
game.app.ticker.add(() => calculatePosition(hero), hero);
game.app.ticker.add(() => Engine.update(engine), hero);

Composite.add(engine.world, [hero.body, hero2.body]);

Events.on(engine, "afterUpdate", (event) => {
  if (engine.pairs.list.length) {
    console.log("pairs", engine.pairs.list.length, engine.pairs.list[0]);
  }
});
