import {
  render,
  screen,
  fireEvent,
  waitFor,
  findByRole,
  within,
} from '@testing-library/react';
import GithubSearchPages from './index';

describe('when the GithubSearchPages is mounted', () => {
  it('must display the title', () => {
    render(<GithubSearchPages />);
    expect(
      screen.getByRole('heading', { name: /github repositories/i }),
    ).toBeInTheDocument();
  });
  it(`must be an input text with the label "filter by' field`, () => {
    render(<GithubSearchPages />);
    expect(screen.getByLabelText(/filter by/i)).toBeInTheDocument();
  });
  it(`must be a search button`, () => {
    render(<GithubSearchPages />);
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });
  it(`must be a e initial state message “Please provide a search option and click in the search button”`, () => {
    render(<GithubSearchPages />);
    expect(
      screen.getByText(/please provide a search option/i),
    ).toBeInTheDocument();
  });
  it('the search button must be disabled until the search is donde', async () => {
    render(<GithubSearchPages />);
    const buttonSearch = screen.getByRole('button', { name: /search/i });

    expect(buttonSearch).not.toBeDisabled();

    fireEvent.click(buttonSearch);

    expect(buttonSearch).toBeDisabled();
    await waitFor(() => {
      expect(buttonSearch).not.toBeDisabled();
    });
  });
  it('the data should be displayed as a sticky table', async () => {
    render(<GithubSearchPages />);

    const buttonSearch = screen.getByRole('button', { name: /search/i });
    fireEvent.click(buttonSearch);

    await waitFor(() => {
      expect(
        screen.queryByText(/please provide a search option/i),
      ).not.toBeInTheDocument();
    });
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
  it('the table headers must contains:  Repository, stars, forks, open issues and updated at', async () => {
    render(<GithubSearchPages />);

    const buttonSearch = screen.getByRole('button', { name: /search/i });
    fireEvent.click(buttonSearch);
    const table = await screen.findByRole('table');
    const tableHeaders = within(table).getAllByRole('columnheader');

    expect(tableHeaders).toHaveLength(5);

    const [repository, stars, forks, openIssues, updatedAt] = tableHeaders;
    expect(repository).toHaveTextContent(/repository/i);
    expect(stars).toHaveTextContent(/stars/i);
    expect(forks).toHaveTextContent(/forks/i);
    expect(openIssues).toHaveTextContent(/open issues/i);
    expect(updatedAt).toHaveTextContent(/updated at/i);
  });

  it('each table result must contain: avatar, repository, stars, updated at, forks, open issues, updatedAt', async () => {
    render(<GithubSearchPages />);
    const buttonSearch = screen.getByRole('button', { name: /search/i });

    fireEvent.click(buttonSearch);
    const table = await screen.findByRole('table');

    const withinTable = within(table);

    const tableCells = withinTable.getAllByRole('cell');

    const [repository, stars, forks, openIssues, updatedAt] = tableCells;

    expect(
      within(tableCells[0]).getByRole('img', { name: /test/i }),
    ).toBeInTheDocument();

    expect(tableCells).toHaveLength(5);

    expect(repository).toHaveTextContent(/test/i);
    expect(stars).toHaveTextContent(/10/);
    expect(forks).toHaveTextContent(/5/);
    expect(openIssues).toHaveTextContent(/2/i);
    expect(updatedAt).toHaveTextContent(/2020-01-01/i);

    // expect(within(table).getByText(/test/i).closest('a')).toHaveAttribute(
    //   'href',
    //   'http://localhost:3000/test',
    // );
    expect(screen.getByRole('link', { name: /test/i })).toBeInTheDocument();
  });
  it(`Total results number of the search and the current number of results`, async () => {
    render(<GithubSearchPages />);
    const buttonSearch = screen.getByRole('button', { name: /search/i });
    fireEvent.click(buttonSearch);
    await screen.findByRole('table');
    expect(screen.getByText(/1–1 of 1/i)).toBeInTheDocument();
  });
});
