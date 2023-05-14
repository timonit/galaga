import { Composite, Engine, Events } from 'matter-js';
import { Game } from './core/game';
import { calculatePosition } from './game/calculatePosition';
import { HeroFactory } from './game/hero-factory';
import { playerController } from './game/player-controller';
import { Sprite } from 'pixi.js';

const game = new Game();
game.init();
const engine = Engine.create({ gravity: { x: 0, y: 0 } });

const factory = new HeroFactory(game, engine);
const hero = factory.createHero(Sprite.from('/assets/batman.png'));
const hero2 = factory.createHero(Sprite.from('/assets/box.png'), {
  x: 200,
  y: 200,
});
game.stage.addChild(hero.sprite);
game.stage.addChild(hero2.sprite);

playerController(hero);
game.app.ticker.add(() => calculatePosition(hero), hero);

Composite.add(engine.world, [hero.body, hero2.body]);

Events.on(engine, 'afterUpdate', (event) => {
  if (engine.pairs.list.length) {
    console.log('pairs', hero, engine);
  }
});
