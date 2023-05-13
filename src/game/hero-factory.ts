import { Sprite } from 'pixi.js';
import { Game } from '../core/game';
import { Hero } from './hero';
import { Engine } from 'matter-js';

export class HeroFactory {
  game: Game;

  phisicEngine: Engine;

  constructor(game: Game, engine: Engine) {
    this.game = game;
    this.phisicEngine = engine;
  }

  createHero(pos?: {x: number, y: number}) {
    const hero = new Hero(this.game, this.phisicEngine);
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
