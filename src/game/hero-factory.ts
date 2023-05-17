import { Sprite } from 'pixi.js';
import { Game } from '../core/game';
import { Hero } from './hero';

export class HeroFactory {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  createHero(sprite: Sprite, { x = 0, y = 100 }: { x: number; y: number }) {
    const hero = new Hero(this.game);
    hero.sprite = sprite;
    hero.init({
      width: 50,
      height: 50,
      position: { x, y },
      speed: 0.5,
    });

    return hero;
  }
}
