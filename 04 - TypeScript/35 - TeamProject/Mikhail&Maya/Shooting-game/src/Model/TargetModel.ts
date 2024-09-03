export class Target {
  image: string;
  position: { x: number; y: number };
  id: string;
  isHit: boolean;
  gameContainer: HTMLElement;
  targetElement: HTMLElement;

  constructor(image: string,position: { x: number; y: number },gameContainer: HTMLElement) {
    this.image = image;
    this.position = position;
    this.id = crypto.randomUUID();
    this.isHit = false;
    this.gameContainer = gameContainer;
    this.targetElement = document.createElement("div");
  }

  hit() {
    if (!this.isHit) {
      this.isHit = true;
      console.log(`Target ${this.id} hit!`);
      return true;
    }
    return false;
}
}
