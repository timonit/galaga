import { Composite, Engine, Events } from 'matter-js';
import { Game } from './core/game';
import { calculatePosition } from './game/calculatePosition';
import { HeroFactory } from './game/hero-factory';
import { playerController } from './game/player-controller';
import { Sprite } from 'pixi.js';

const game = new Game();
game.init();

const factory = new HeroFactory(game);
const hero = factory.createHero(Sprite.from('/assets/batman.png'));
const hero2 = factory.createHero(Sprite.from('/assets/box.png'), {
  x: 200,
  y: 200,
});
game.stage.addChild(hero.sprite);
game.stage.addChild(hero2.sprite);

playerController(hero);
game.app.ticker.add(() => calculatePosition(hero), hero);

Composite.add(game.phisicalEngine.world, [hero.body, hero2.body]);

Events.on(game.phisicalEngine, 'afterUpdate', (event) => {
  if (game.phisicalEngine.pairs.list.length) {
    console.log('pairs', hero, game.phisicalEngine);
  }
});
