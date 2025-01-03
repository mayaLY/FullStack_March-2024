import { PetModel, pets } from '../../src/model/petModel'


export async function getAllPets(req: any, res: any) {
    try {
        const pets = await PetModel.find();
        console.log(pets)
        res.send({ pets });

    } catch (error) {
        console.error(error);
    }
}


export async function getAllPetsUnderAge(req: any, res: any) {
    try {
        const { age } = req.params;
        const pets = await PetModel.find({ age: { $lte: age } });
        console.log(pets)
        res.send({ pets });

    } catch (error:any) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function getAllDogs(req: any, res: any) {
    try {
        const pets = await PetModel.find({ species: 'dog' });
        console.log(pets)
        res.send({ pets });
    }catch(error:any) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}