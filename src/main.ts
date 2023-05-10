import { Game } from './core/game';
import { HeroFactory } from './game/hero-factory';

const game = new Game();
game.init();

const factory = new HeroFactory(game);
const hero = factory.createHero();
game.stage.addChild(hero.sprite);

let count = 0;
setInterval(() => {
  hero.setPosition(hero.state.position.x+count, hero.state.position.y);
  count+=1;
}, 1000);
