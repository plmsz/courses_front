# Accessiblity

https://www.w3.org/TR/wai-aria/#role_definitions
https://testing-library.com/docs/queries/about/#priority

Based on the Guiding Principles, your test should resemble how users interact with your code (component, page, etc.) as much as possible. With this in mind, we recommend this order of priority:

Queries Accessible to Everyone Queries that reflect the experience of visual/mouse users as well as those that use assistive technology.

- getByRole: This can be used to query every element that is exposed in the accessibility tree. With the name option you can filter the returned elements by their accessible name. This should be your top preference for just about everything. There's not much you can't get with this (if you can't, it's possible your UI is inaccessible). Most often, this will be used with the name option like so: getByRole('button', {name: /submit/i}). Check the list of roles.

- getByLabelText: This method is really good for form fields. When navigating through a website form, users find elements using label text. This method emulates that behavior, so it should be your top preference.

- getByPlaceholderText: A placeholder is not a substitute for a label. But if that's all you have, then it's better than alternatives.

- getByText: Outside of forms, text content is the main way users find elements. This method can be used to find non-interactive elements (like divs, spans, and paragraphs).

- getByDisplayValue: The current value of a form element can be useful when navigating a page with filled-in values.
Semantic Queries HTML5 and ARIA compliant selectors. Note that the user experience of interacting with these attributes varies greatly across browsers and assistive technology.

- getByAltText: If your element is one which supports alt text (img, area, input, and any custom element), then you can use this to find that element.

- getByTitle: The title attribute is not consistently read by screenreaders, and is not visible by default for sighted users
Test IDs

- getByTestId: The user cannot see (or hear) these, so this is only recommended for cases where you can't match by role or text or it doesn't make sense (e.g. the text is dynamic).

----
# O output te ajuda quando vc cola um role que não exista

# Testing Styles from Imported CSS Modules
A common question about testing styles is "why doesn't .toHaveStyle() work with classes from my imported CSS module?"

Mocking CSS modules
In the case of create-react-app applications -- or applications that have otherwise mocked css modules for Jest -- CSS module imports are simply ignored for Jest test.

Cosmetic Styles vs. Functional Styles
In many cases, the classes are merely cosmetic and won't affect functional tests (such as placement of the element on the page). In these cases, mocking the CSS modules works fine. However, sometimes classes do affect function. For example, say you have a CSS module that uses a hidden class, which results in display: none when interpreted. Without adding a Jest transformer to interpret the CSS, Testing Library will not know that hidden class would result in display: none. Tests around element visibility that rely on this class will fail.

Transformers
For styles to be interpreted in tests, you need a transformer to, well, transform the CSS classes into styles. Here are a couple options:

https://www.npmjs.com/package/jest-transform-css

https://www.npmjs.com/package/jest-css-modules-transform

The latter has more downloads per week, but the former seems to be more actively maintained.

Testing for Class Name
Another possibility would be to check explicitly for the class name (hidden in this example), using toHaveClass. This would be simpler, but farther from the actual user experience (this is testing implementation details, rather than how the user sees the page). It's always a balance, and I think either this approach or transforming the CSS would be defensible.

## Unit Testing Functions
Use:
- covering all possible edge cases
- determining what caused functional tests to fail
Issues:
- highl-level makes them resistant to refactors
- highl-level makes them difficult to diagnose

## ESLINT
npm install eslint-plugin-testing-library eslint-plugin-jest-dom

## Bootstrap
no html
 <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

  <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>

  <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>

no index

import 'bootstrap/dist/css/bootstrap.min.css';

## userEvent
  - fireEvent dispatches exactly the events you tell it to and just those - even if those exact events never had been dispatched in a real interaction in a browser.

  - userEvent on the other hand dispatches the events like they would happen if a user interacted with the document. That might lead to the same events you previously dispatched per fireEvent directly, but it also might catch bugs that make it impossible for a user to trigger said events.

npm install @testing-library/dom 
npm install @testing-library/user-event

## query methods

https://testing-library.com/docs/react-testing-library/cheatsheet/
command[All]ByQueryType
- command
  - get: expect element to be in DOM
  - query: expect element not to be in DOM
  - find: expect element to appear async

- [All]
  - (include) more than one match
  - (exclude) one match

- QueryType:
  - Role
  - AltText
  - Text
  - Form elements:
    - Placeholder
    - LabelText
    - DisplayByValue

## Avoid nesting
It is not advisable to write code in a describe block without wrapping it in beforeEach or beforeAll (or afterEach / afterAll). Wrapping the code in one of these blocks ensures the code will run at the proper time(s) -- without specifying that, the code will behave unpredictably (as you noticed). When I moved the render statement to be the first line of each test, the tests passed.

Note that it is against best practices to put a render statement in a beforeEach, according to the testing-library/react ESLint plugin.  

https://kentcdodds.com/blog/avoid-nesting-when-youre-testing
https://kentcdodds.com/blog/write-fewer-longer-tests


### Disallow the use of render in setup functions
const setup = () => render(<MyComponent />);

beforeEach(() => {
  // other stuff...
});

it('Should have foo and bar', () => {
  setup();
  expect(screen.getByText('foo')).toBeInTheDocument();
  expect(screen.getByText('bar')).toBeInTheDocument();
});

If you would like to allow the use of render (or a custom render function) in either beforeAll or beforeEach, this can be configured using the option allowTestingFrameworkSetupHook. This may be useful if you have configured your tests to skip auto cleanup. allowTestingFrameworkSetupHook is an enum that accepts either "beforeAll" or "beforeEach".

   "testing-library/no-render-in-setup": ["error", {"allowTestingFrameworkSetupHook": "beforeAll"}],

  
  ## not wrapped in act(...) warning
  - react update element after test was finished
  - await the change and assertin on it

  ## Mock server worker
  npm install msw
  https://mswjs.io/docs/getting-started/mocks/rest-api

  - ctx : a group of functions that help to set a status code, headers, body, etc. of the mocked response.

  server e setupTest
  https://mswjs.io/docs/getting-started/integrate/node