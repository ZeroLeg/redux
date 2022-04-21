import { createStore, combineReducers } from 'redux';

// Actions
const BUY_POKEMON = 'BUY_POKEMON';
const RETURN_POKEMON = 'RETURN_POKEMON';

const BUY_YOSI = 'BUY_YOSI';
const RETURN_YOSI = 'RETURN_YOSI';

const buy_pokemon_action = (cant) => {
    return {
        type: BUY_POKEMON,
        payload: cant
    }
}

const return_pokemon_action = (cant) => {
    return {
        type: RETURN_POKEMON,
        payload: cant
    }
}

const buy_yosi_action = (cant) => {
    return {
        type: BUY_YOSI,
        payload: cant
    }
}

const return_yosi_action = (cant) => {
    return {
        type: RETURN_YOSI,
        payload: cant
    }
}
// Reducers
const default_games_state = {
    pokemon: 12, 
    yosi: 10
}

const games_reducer = (state = default_games_state, action) => {
    switch (action.type) {
        case BUY_YOSI:
            return {
                // Destructuring para dejar el estado en su estado habitual, y solo modificar el objeto deseado
                ...state,
                yosi: state.yosi - action.payload
            }
            break;

        case RETURN_YOSI:
                return {
                    ...state,
                    yosi: state.yosi + action.payload
                }
                break;

        case BUY_POKEMON:
            return {
                // Destructuring para dejar el estado en su estado habitual, y solo modificar el objeto deseado
                ...state,
                pokemon: state.pokemon - action.payload
            }
            break;

        case RETURN_POKEMON:
                return {
                    ...state,
                    pokemon: state.pokemon + action.payload
                }
                break;
        default:
            return state;
            break;
    }
}

const default_consoles_state = {
    ps5:30, 
    switch:30
}

const consoles_reducer = (state = default_consoles_state, action) => {
    switch (action.type) {

        // case BUY_POKEMON:
        //     return {
        //         // Destructuring para dejar el estado en su estado habitual, y solo modificar el objeto deseado
        //         ...state,
        //         pokemon: state.pokemon - action.payload
        //     }
        //     break;

        // case RETURN_POKEMON:
        //         return {
        //             ...state,
        //             pokemon: state.pokemon + action.payload
        //         }
        //         break;
        default:
            return state;
            break;
    }
}
// Store

const rootReducers = combineReducers({
    games_reducer, 
    consoles_reducer
});


const store = createStore(rootReducers);

export  {store, buy_pokemon_action, return_pokemon_action, buy_yosi_action, return_yosi_action}; 