import { pets}from '../../model/petsModel'
export function getAllPets(req:any, res:any) {
    try {
        res.send({pets});
    } catch (error) {
        console.error(error);
    }
}

