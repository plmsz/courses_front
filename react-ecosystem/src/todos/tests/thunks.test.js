import { loadTodos } from './../thunks';
import { server } from '../../mocks/server';
import { rest } from 'msw';

describe('The load todos thunks', () => {
    it('should dispatches the correct actions in the success scenario', async () => {
        const fakeDispatch = jest.fn();

        const fakeTodos = [{
            id: '1',
            text: 'Learn Redux',
            isCompleted: false,
            createdAt: new Date().toString(),
        }, {
            id: '2',
            text: 'Get out of the house',
            isCompleted: false,
            createdAt: new Date(Date.now() - 86400000 * 7).toString(),
        }];

        server.use(
            rest.get('http://localhost:8080/todos', (req, res, ctx) => {
                return res(
                    ctx.status(200),
                    ctx.json(fakeTodos)
                );
            }),
        );
        const expectedFirstAction = { type: 'LOAD_TODOS_IN_PROGRESS' };

        const expectedSecondAction = {
            type: 'LOAD_TODOS_SUCCESS', payload: {
                todos: fakeTodos
            }
        };

        await loadTodos()(fakeDispatch);

        expect(fakeDispatch).toHaveBeenCalledWith(expectedFirstAction);

        expect(fakeDispatch).toHaveBeenCalledWith(expectedSecondAction);
        
    });
});