import { Weapon } from "../Model/WeaponModel"
import { Target } from "../Model/TargetModel";
import { renderHomeScreen } from "../View/homescreen";

export function handleStartGame(weapon: Weapon, root: HTMLElement) {
   const targets: Target[] = [
      new Target('MohamadD.jpg', { x: 0, y: 0 }, root),
      new Target('Nassralla.jpg', { x: 0, y: 0 }, root),
      new Target('Sinwar-mouse.jpg', { x: 0, y: 0 }, root),
      new Target('yismail.jpg', { x: 0, y: 0 }, root),
  ];


   renderHomeScreen(weapon, root,targets);

   const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.innerText = 'Score: 0';
    }
    
}