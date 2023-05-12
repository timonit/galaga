import { Sprite } from 'pixi.js';
import { Game } from '../core/game';
import { Hero } from './hero';

export class HeroFactory {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  createHero(pos?: {x: number, y: number}) {
    const hero = new Hero(this.game);
    hero.sprite = Sprite.from('/assets/hero.png');
    hero.sprite.width = 50;
    hero.sprite.height = 50;
    hero.init({
      position: { x: pos?.x || 0, y: pos?.y || 100 },
      speed: 0.5,
    });

    return hero;
  }
}
