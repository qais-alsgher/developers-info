import { v4 as uuidv4 } from 'uuid';
export const actionType = {
    ADD_DEVELOPER: 'ADD_DEVELOPER',
    REMOVE_DEVELOPER: 'REMOVE_DEVELOPER'
};


export const devloperReducer = (state, action) => {
    switch (action.type) {
        case actionType.ADD_DEVELOPER:
            return (
                [...state, {
                    id: uuidv4(),
                    name: action.payload.name,
                    language: action.payload.language,
                    library: action.payload.library,
                    food: action.payload.food,
                    drink: action.payload.drink,
                }]

            );

        case actionType.REMOVE_DEVELOPER:
            return (
                state.filter(dev => dev.id !== action.id)
            );
        default: return state;
    }
}