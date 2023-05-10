import { Sprite } from 'pixi.js';
import { Game } from '../core/game';
import { Hero } from './hero';

export class HeroFactory {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  createHero() {
    const hero = new Hero(this.game);
    hero.sprite = Sprite.from('/assets/hero.png');
    hero.init({
      position: { x: 0, y: 100 },
    });

    return hero;
  }
}
