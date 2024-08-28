import { handleStartGame } from "../Controllers/handleStartGame";
export function renderWeaponSelect(root:HTMLElement){
    console.log("hello world");
    root.innerHTML=`
    <div class="weaponSelect">
        <div class="weaponCard">
                <img src="/src/images/weapons/pistolSelect.png" id="pistolImage" alt="Pistol" style="width:100px;height:100px;">
        </div>
        <div class="weaponCard">
                <img src="/src/images/weapons/akSelect.png" id="akImage" alt="Ak-47" style="width:150px;height:100px;">
        </div>
        <div class="weaponCard">
                <img src="/src/images/weapons/m16Select.png" id="m16Image" alt="M16" style="width:150px;height:100px;">
        </div>
    </div>`;
     
    const weaponImages = root.querySelectorAll('.weaponCard img');
    weaponImages.forEach(img => {
        img.addEventListener('click', () => handleStartGame(img.id));
    });

}