// ----  Model -----

interface Creature {
    id:string  //unique id
    name: string;
    x: number;
    y: number;
    src: string;
}

const creatures: Creature[] = [];
const dragon1: Creature = {
    id:`${Math.random()}`, //unique id
    name: "dragon1",
    x: 5,
    y: 25,
    src: "https://thumbs.dreamstime.com/b/generative-ai-illustration-red-cute-young-dragon-isolated-white-background-png-cute-red-dragon-character-isolated-white-286852838.jpg"
}
const dragon2: Creature = {
    id:`${Math.random()}`,
    name: "dragon2",
    x: 15,
    y: 45,
    src: "https://thumbs.dreamstime.com/b/generative-ai-illustration-red-cute-young-dragon-isolated-white-background-png-cute-red-dragon-character-isolated-white-286852838.jpg"
}

creatures.push(dragon1);
creatures.push(dragon2);

console.log(creatures);


//----  View -----

function renderCreature(creature: Creature): string {
    try {
        const html = `<img src="${creature.src}" style="top: ${creature.y}%; left: ${creature.x}%;" class="creature" onclick="handleExplode(${creature.id})">`;
        return html;
    } catch (error) {
        console.error(error);
        return "";
    }
}

function renderCreatures(creatures: Creature[], divElement: HTMLDivElement) {
    try {
        if (!divElement) throw new Error("divElement is missing");

        const html = creatures.map(creature => renderCreature(creature)).join("");

        divElement.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}

//----  Controller -----

function handleExplode(id: string) {
    try {
     
        //find in array of creatures the creature with the id
        const creature = creatures.find(creature => creature.id === id.toString());

        if (!creature) throw new Error("creature not found");

        //explode creature

        //change the src of the creature to explosion image
        creature.src = "https://static.vecteezy.com/system/resources/previews/003/190/060/non_2x/boom-comic-book-explosion-vector.jpg";
        renderCreatures(creatures, document.querySelector("#map") as HTMLDivElement);
      

        setTimeout(() => {
            //remove creature
            const index = creatures.findIndex(creature => creature.id === id.toString());
            //delete 1 element from the array
            creatures.splice(index, 1);
            renderCreatures(creatures, document.querySelector("#map") as HTMLDivElement);
        }, 1000);

    } catch (error) {
        console.error(error);
    }
}

//question 1: handleExplode knows which creature to explode by the id. How does it know which creature to explode?
//question 2: what is the purpose of the setTimeout function? 

renderCreatures(creatures, document.querySelector("#map") as HTMLDivElement);