import { render, screen } from '@testing-library/react';
import GithubSearchPages from './index';

describe('when the GithubSearchPages is mounted', () => {
  it('must display the title', () => {
    render(<GithubSearchPages />);
    expect(
      screen.getByRole('heading', { name: /github repositories/i })
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
      screen.getByText(/please provide a search option/i)
    ).toBeInTheDocument();
  });
});
