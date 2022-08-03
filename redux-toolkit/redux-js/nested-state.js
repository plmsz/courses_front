const { produce } = require('immer');
const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators

const STREET_UPDATE = 'STREET_UPDATE';

function updateStreet(street) {
    return {
        type: STREET_UPDATE,
        payload: street,
    };
}


const initialState = {
   name: 'Paloma',
   address: {
    street: '212 Main Street',
    city: 'San Francisco',
    state: 'CA',
   }
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case STREET_UPDATE:
            // return {
            //     ...state,
            //    address: {
            //     ...state.address,
            //     street: action.payload,
            //    }
            // };
            return produce(state,(draft)=> {
                draft.address.street = action
            })
        default:
            return state;
    }
};


const store = createStore(reducer);  

console.log('Initial state:', store.getState()); 

const unsubscribe = store.subscribe(() => console.log('update state', store.getState())); 

const actions = bindActionCreators({updateStreet}, store.dispatch)

actions.updateStreet('7890 Main Street')

unsubscribe();  // handles unregistering of listeners via the function returned by subscribe




