export function alterarTodo(todos) {
    return{
        type: 'ACRESCENTAR TODO',
        payload: todos
    }
}