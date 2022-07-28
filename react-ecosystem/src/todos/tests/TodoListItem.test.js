import { getBorderStyledForDate } from '../TodoListItem';

describe('getBorderStyledForDate', () => {
    it('returns none when the date is less than 5 days', () => {
        const today = Date.now();
        const recentDate = new Date(Date.now() - 86400000 * 3);

        const actual = getBorderStyledForDate(recentDate, today);
        const expected = 'none';

        expect(actual).toBe(expected);
    });

    it('returns a border when the date is more than 5 days', () => {
        const today = Date.now();
        const recentDate = new Date(Date.now() - 86400000 * 6);

        const actual = getBorderStyledForDate(recentDate, today,'2');
        const expected = '2px solid #eb7979';

        expect(actual).toBe(expected);

    });
});