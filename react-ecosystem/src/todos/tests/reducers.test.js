
import { todos } from '../reducers';
describe('The todos reducer', () => {
    it('should add a new todo when CREATE_TODO action is received', () => {
        const fakeTodo = { text: 'buy groceries', isCompleted: false };

        const fakeAction = {
            type: 'CREATE_TODO',
            payload: {
                todo: fakeTodo,
                isLoading: false,
            }
        };

        const originalState = { isLoading: false, data: [] };

        const expected = {
            isLoading: false,
            data: [fakeTodo]
        };

        const actual = todos(originalState, fakeAction);

        expect(actual).toEqual(expected)
    });
});