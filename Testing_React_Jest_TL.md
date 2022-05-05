# Accessiblity and Queries

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

> O output te ajuda quando vc cola um role que não exista

## Some roles

- Spinbutton: A form of range that expects the user to select from among discrete choices.

---

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

---

# Unit Testing Functions

Use:

- covering all possible edge cases
- determining what caused functional tests to fail
  Issues:
- highl-level makes them resistant to refactors
- highl-level makes them difficult to diagnose

---

## ESLINT

npm install eslint-plugin-testing-library eslint-plugin-jest-dom

---

## Bootstrap

- No index.html

```html
<script
	src="https://unpkg.com/react/umd/react.production.min.js"
	crossorigin
></script>

<script
	src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
	crossorigin
></script>

<script
	src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
	crossorigin
></script>
```

- No index.js

`import 'bootstrap/dist/css/bootstrap.min.css'; `

---

## userEvent

- fireEvent dispatches exactly the events you tell it to and just those - even if those exact events never had been dispatched in a real interaction in a browser.

- userEvent on the other hand dispatches the events like they would happen if a user interacted with the document. That might lead to the same events you previously dispatched per fireEvent directly, but it also might catch bugs that make it impossible for a user to trigger said events.

npm install @testing-library/dom
npm install @testing-library/user-event

### Pointer events options:

- click
- dblClick
- hover

- ### unhover

```javascript
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tooltip from "../tooltip";

test("hover", () => {
	const messageText = "Hello";
	render(
		<Tooltip messageText={messageText}>
			<TrashIcon aria-label="Delete" />
		</Tooltip>
	);
	userEvent.hover(screen.getByLabelText(/delete/i));
	expect(screen.getByText(messageText)).toBeInTheDocument();
	userEvent.unhover(screen.getByLabelText(/delete/i));
	expect(screen.queryByText(messageText)).not.toBeInTheDocument();
});
```

- selectOptions
- deselectOptions

### type(element, text, [options])

Writes text inside an `<input>` or a `<textarea>`

```javascript
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import userEvent from "@testing-library/user-event";

test("type", () => {
	render(<textarea />);

	userEvent.type(screen.getByRole("textbox"), "Hello,{enter}World!");
	expect(screen.getByRole("textbox")).toHaveValue("Hello,\nWorld!");
});
```

### keyboard(text, options)

Simulates the keyboard events described by text. This is similar to userEvent.type() but without any clicking or changing the selection range

### upload(element, file, [{ clickInit, changeInit }], [options])

Uploads file to an `<input>`

### tab({shift, focusTrap})

Fires a tab event changing the document.activeElement in the same way the browser does.

### clear

Selects the text inside an `<input>`or `<textarea>` and deletes it.

```javascript
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("clear", () => {
	render(<textarea defaultValue="Hello, World!" />);

	userEvent.clear(screen.getByRole("textbox"));
	expect(screen.getByRole("textbox")).toHaveValue("");
});
```

### paste(element, text, eventInit, options)

Allows you to simulate the user pasting some text into an input.

---

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

---

## Avoid nesting

It is not advisable to write code in a describe block without wrapping it in beforeEach or beforeAll (or afterEach / afterAll). Wrapping the code in one of these blocks ensures the code will run at the proper time(s) -- without specifying that, the code will behave unpredictably (as you noticed). When I moved the render statement to be the first line of each test, the tests passed.

Note that it is against best practices to put a render statement in a beforeEach, according to the testing-library/react ESLint plugin.

https://kentcdodds.com/blog/avoid-nesting-when-youre-testing
https://kentcdodds.com/blog/write-fewer-longer-tests

## Disallow the use of render in setup functions

```javascript
const setup = () => render(<MyComponent />);

beforeEach(() => {
	// other stuff...
});

it("Should have foo and bar", () => {
	setup();
	expect(screen.getByText("foo")).toBeInTheDocument();
	expect(screen.getByText("bar")).toBeInTheDocument();
});
```

If you would like to allow the use of render (or a custom render function) in either beforeAll or beforeEach, this can be configured using the option allowTestingFrameworkSetupHook. This may be useful if you have configured your tests to skip auto cleanup. allowTestingFrameworkSetupHook is an enum that accepts either "beforeAll" or "beforeEach".

"testing-library/no-render-in-setup": ["error", {"allowTestingFrameworkSetupHook": "beforeAll"}],

## not wrapped in act(...) warning

- react update element after test was finished
- await the change and assertin on it

```javascript
await waitForElementToBeRemoved(() =>
	screen.queryByText(/no ice cream will actually be delivered/i)
);
```

---

# Mock server worker

- Purpose: intercep networks calls and return specified response
- Set up test conditions using server response
  npm install msw

https://mswjs.io/docs/getting-started/mocks/rest-api

- ctx : a group of functions that help to set a status code, headers, body, etc. of the mocked response.

Create a folder
/mocks
/handlers.js
/server.js

- handler.js

```javascript
import { rest } from "msw";

export const handlers = [
	rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
		return res(
			ctx.json([
				{ name: "Chocolate", imagePath: "/images/chocolate.png" },
				{ name: "Vanilla", imagePath: "/images/vanilla.png" },
			])
		);
	}),
];
```

Copy whats is in the link in the server.js and setupTest.js

https://mswjs.io/docs/getting-started/integrate/node

---

## Find elements async

npm install axios

```javascript
test("displays image for each scoop option from server", async () => {
	render(<Options optionType="scoops" />);

	const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
	expect(scoopImages).toHaveLength(2);

	const altText = scoopImages.map((element) => element.alt);
	expect(altText).toEqual(["Chocolate Scoop", "Vanilla Scoop"]);
});
```

---

## Simutale server errors

Override Mock service Worker response dor individual tests

```javascript
test("handles error for scoops and toppings routes", async () => {
	server.resetHandlers(
		rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
			res(ctx.status(500))
		),
		rest.get("http://localhost:3030/toppings", (req, res, ctx) =>
			res(ctx.status(500))
		)
	);

	<!-- ... -->

});

```

# Skip a test, execulte only

Press p to identify a pattern and chose a file

```javascript
test.skip("not a real test", () => {});
test.only("execute only this test", () => {});
```

# waitFor

When in need to wait for any period of time you can use waitFor, to wait for your expectations to pass.

```javascript
// Wait until the callback does not throw an error. In this case, that means
// it'll wait until the mock function has been called twice.
await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(2));
// ...
```

# wrapper

Wrapper option to render to apply context provider

```javascript
render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });
```

# Custom Render

It's often useful to define a custom render method that includes things like global context providers, data stores, etc. To make this available globally, one approach is to define a utility file that re-exports everything from React Testing Library. You can replace React Testing Library with this file in all your imports.

https://testing-library.com/docs/react-testing-library/setup/#custom-render

# black box test (not consider the implementation)

# describe

creates a block that groups together several related tests. For example, if you have a myBeverage object that is supposed to be delicious but not sour, you could test it with:

```javascript
const myBeverage = {
	delicious: true,
	sour: false,
};

describe("my beverage", () => {
	test("is delicious", () => {
		expect(myBeverage.delicious).toBeTruthy();
	});

	test("is not sour", () => {
		expect(myBeverage.sour).toBeFalsy();
	});
});
```

---

# Snapshot

- u - to update snapshot

```javascript
it("renders correctly", () => {
	const tree = renderer
		.create(<Link page="http://www.instagram.com">Instagram</Link>)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
```

# Debugging

```javascript
screen.debug();
```

| Error                                                       | Cause                                                                                |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Untable to find role                                        | Eihter role doesn't exist or no element matches name option                          |
| An update to component inside a test was not wrapped in act | There was an update to the component state afte test completed. Use **await findBy** |
| Can't perform a React state update on an unmounte component | There was an update to the component state afte test completed. Use **await findBy** |
| Error: connect ECONNREFUSED 127.0.0.1                       | There isn't Mock Service Worker handler associated with this route and method        |

# Unit Test x Functional tests

- Test Behavior, not Code
  This means no testing of “implementation details” such as internal workings of Redux action creators and reducers, or mocking functions to return a specific value; instead, the test setup is done by entering text and clicking on the page as a user would.

- Use unit tests when:
  my functional tests happen to test only one unit
  there’s a likely point of failure in a longer functional test
  I want to confirm that the correct data is sent to the server
  I’m testing edge cases for a helper function that don’t affect rendering

---

# Jest Mock as Props

When use:

- Added a prop to top level page Componentes (ex: setOrderPhase)
- Ohter components also have functions as props (ex: updateitemcounte in sccopoption)
- typescript validator

Merely a placeholder to avoid errors

```javascript
jset.fn();
```

---

# Common mistakes

skip no use screen
https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

---

# Matchers

## toHaveClass()

```javascript
it("Renders with a className equal extra", () => {
	const deleteButton = getByTestId("delete-button");
	const noClasses = getByTestId("no-classes");

	expect(deleteButton).toHaveClass("extra");
});
```

## { exact : false}

- to match partial text
- it doesn't work with getByRole

```javascript
const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false });
```

## toBe x toEqual (matchers)

- toBe: numbers, strings
- toEqual : arrays, objects

```javascript
const altText = scoopImages.map((element) => element.alt);
expect(altText).toEqual(["Chocolate", "Vanilla"]);
```
