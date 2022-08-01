import { getCompleteTodos } from '../selectors';


describe('The getCompletedTodos selector', () => {
    it.skip('returns only completed todos', () => {
        const fakeTodos = [{
            text: 'Say Hello',
            isCompleted: true,
        },
        {
            text: 'read document',
            isCompleted: false,
        },
        {
            text: 'do exercises',
            isCompleted: false,
        }];

        const expected = [{
            text: 'Say Hello',
            isCompleted: true,
        }];

        // const actual = getCompleteTodos(fakeTodos);

        // expect(actual).toEqual(expected);
    });
});