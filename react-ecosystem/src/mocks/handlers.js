import { rest } from 'msw';

export const handlers = [
    rest.get('http://localhost:8080/todos', (req, res, ctx) => {
        return res(
            ctx.json(
                [{
                    id: '1',
                    text: 'Learn Redux',
                    isCompleted: false,
                    createdAt: new Date().O,
                }, {
                    id: '2',
                    text: 'Get out of the house',
                    isCompleted: false,
                    createdAt: new Date(Date.now() - 86400000 * 7),
                }]
            )
        );
    })
];