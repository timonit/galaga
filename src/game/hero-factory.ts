import { Sprite } from 'pixi.js';
import { Game } from '../core/game';
import { Hero } from './hero';

export class HeroFactory {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  createHero(sprite: Sprite, pos?: { x: number; y: number }) {
    const width = 50;
    const height = 50;
    const hero = new Hero(this.game);
    hero.sprite = sprite;
    hero.sprite.width = width;
    hero.sprite.height = height;
    hero.init({
      width,
      height,
      position: { x: pos?.x || 0, y: pos?.y || 100 },
      speed: 0.5,
    });

    return hero;
  }
}
