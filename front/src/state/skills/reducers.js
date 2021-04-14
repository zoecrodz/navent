import { createReducer } from '@reduxjs/toolkit';
import { allSkills } from "./actions";

const initialState = {
    allSkills: [] //agregado para panel admin
};

const skillsReducer = createReducer(initialState, {
    [allSkills.fulfilled] : (state, action) => { 
        const payload = action.payload
        state.allSkills = payload
    }//agregado para panel admin
});

export default skillsReducer

//crear un reducer para los skills, que haga un get al back a /api/skills, me da la lista de todas las habilidades, 

//tengo un skill y ese skill puede o no tener un test, el skill me viene con el id, o el test me viene con el id, los skills van a relacionarse con los test, me llega un array con las habilidades, pueden tener o no un test, yo muestro todos los skills, los skills tienen test o no, un booleano, un array, con true o false, que se llama 


// cuando me logue con admin que me lleve a admin/skills

