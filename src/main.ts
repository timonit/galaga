import { Composite, Engine, Events } from 'matter-js';
import { Game } from './core/game';
import { calculatePosition } from './game/calculatePosition';
import { HeroFactory } from './game/hero-factory';
import { playerController } from './game/player-controller';
import { Sprite } from 'pixi.js';

const game = new Game();
game.init();

const factory = new HeroFactory(game);
const heroSprite = Sprite.from('/assets/batman.png');
const boxSprite = Sprite.from('/assets/box.png');
const hero = factory.createHero(heroSprite, { x: 250, y: 250 });
const hero2 = factory.createHero(boxSprite, { x: 200, y: 200 });
hero2.body.isStatic = true;
game.stage.addChild(hero.sprite);
game.stage.addChild(hero2.sprite);

playerController(hero);
game.app.ticker.add(() => calculatePosition(hero), hero);

Composite.add(game.phisicalEngine.world, [hero.body, hero2.body]);

Events.on(game.phisicalEngine, 'afterUpdate', (event) => {
  if (game.phisicalEngine.pairs.list.length) {
    console.log('pairs', hero2.body.position.y, game.phisicalEngine.pairs);
  }
});
