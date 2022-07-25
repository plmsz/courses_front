const initialState = {
    todos: [{
        id: 1,
        title: 'ler FMA 5',
        created_at: +new Date(2022, 23, 6, 15, 43),
        done: true,
    }]
};


export default function todoReducers(state = initialState, action) {
    switch (action.type) {
        case 'ACRESCENTAR TODO':
            return {
                ...state,
                todos: action.payload
            };
            break;
        default:
            return state;
    }
}