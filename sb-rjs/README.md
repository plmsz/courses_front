# Getting Started

npx create-react-app app-name
npx sb init
npm run storybook

# rename a story

InputRegular.storyName = 'Medium Input'

# sorting stories (não funcionou)

options: {
storySort: (a, b) =>
a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
},

# story within a story

- possivel juntar dois componentes e uma story, se else não usarem args

# Extendendo com args

```js
export const Tomato = Template.bind({});
Tomato.args = {
	backgroundColor: "tomato",
	label: "Press me now",
	size: "md",
};
export const LargeTomato = Template.bind({});
LargeTomato.args = {
	...Tomato.args,
	size: "lg",
};
```

# Theme and decorators

- https://github.com/mui/material-ui/issues/24282 Mui

# Não funcionou

```js
import { Button } from '@chakra-ui/react';

export default {
    title: 'Chakra/Button',
    component: Button,
};
export const Success = () => <Button variantColor='green' title='Success'>Success</Button>;
export const Error = () => <Button variantColor='red' title='Error'>Error</Button>;
---
import React from 'react';
import { Theme Provider, theme, CSSReset } from '@chakra-ui/core';
import { React } from 'react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};


export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Story {...context} />
    </ThemeProvider>
  )
];
---
import { Button } from '@mui';

export default {
    title: 'Mui/Button',
    component: Button,
};
export const Success = () => <Button variant='primary'>Success</Button>;
export const Error = () => <Button variant='error' title='Error'>Error</Button>;
--
const defaultTheme = createTheme(); // or your custom theme

const withThemeProvider = (Story, context) => {
  return (
    <Emotion10ThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={defaultTheme}>
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
```

# Addons

=> Background (já instalado, pode modificar)
https://storybook.js.org/docs/react/essentials/backgrounds
// .storybook/preview.js

```js
export const parameters = {
	backgrounds: {
		default: "twitter",
		values: [
			{
				name: "twitter",
				value: "#00aced",
			},
			{
				name: "facebook",
				value: "#3b5998",
			},
		],
	},
};
```

You can also define backgrounds per-component or per-story basis through parameter inheritance:

```js
// Button.stories.js|jsx|ts|tsx

import { Button } from "./Button";

// To apply a set of backgrounds to all stories of Button:
export default {
	title: "Button",
	component: Button,
	parameters: {
		backgrounds: {
			default: "twitter",
			values: [
				{ name: "twitter", value: "#00aced" },
				{ name: "facebook", value: "#3b5998" },
			],
		},
	},
};
```

You can also override a single key on the backgrounds parameter, for instance, to set a different default value for a particular story:

```js
// Button.stories.js|jsx|ts|tsx

import { Button } from "./Button";

export default {
	title: "Button",
	component: Button,
};

const Template = (args) => ({
	//👇 Your template goes here
});

export const Large = Template.bind({});
Large.parameters = {
	backgrounds: { default: "facebook" },
};
```

=> console
npm i @storybook/addon-console @storybook/addon-actions --save-dev

// config.js

import '@storybook/addon-console';

import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

--

https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/
https://storybook.js.org/tutorials/design-systems-for-developers/

## Controls

    - knobs ( will be deprecated)

https://www.npmjs.com/package/@storybook/addon-controls

### disabled button

```js
import PropTypes from "prop-types";

function Button({ label, backgroundColor = "tomato", disabled }) {
	const style = {
		backgroundColor,
		cursor: `${disabled ? "not-allowed" : "pointer"}`,
		opacity: `${disabled && "0.75"}`,
	};
	return (
		<button style={style} disabled={disabled}>
			{label}
		</button>
	);
}

Button.propTypes = {
	label: PropTypes.string,
	backgroundColor: PropTypes.string,
	disabled: PropTypes.bool,
};

export default Button;

//Button.stories.js
export const Controls = Template.bind({});
Controls.args = {
	label: `I'm disabled`,
	disabled: true,
};
```

Veja mais em:
https://github.com/MinsterRobin/storybook-button

## Custom Viewporty

```js
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const customViewports = {
	kindleFire2: {
		name: "Kindle Fire 2",
		styles: {
			width: "600px",
			height: "963px",
		},
	},
	kindleFireHD: {
		name: "Kindle Fire HD",
		styles: {
			width: "533px",
			height: "801px",
		},
	},
};

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	viewport: {
		viewports: { ...INITIAL_VIEWPORTS, ...customViewports },
	},
};
```

## a11
https://storybook.js.org/addons/@storybook/addon-a11y/
~~~js
	module.exports = {
	addons: ['@storybook/addon-a11y'],
	};
~~~
# env
https://storybook.js.org/docs/react/configure/environment-variables

# build 
npm build-storybook
criará automaticamente a passta storybook-static

# publish
https://storybook.js.org/docs/react/sharing/publish-storybook#publish-storybook-with-chromatic

# Criando um array de um sequencia de números

~~~~js
const n = 3
const a = Array.from({n}, (v, k) => k); // [1,2,3]
[ ...Array(n).keys() ].map( i => i+1); // [1,2,3]

/* var foo = new Array(N);   // where N is a positive integer

this will create an array of size, N, primarily for memory allocation, 
but does not create any defined values

Making use of the spread operator (...) and keys method, enables you to create a temporary array of size N to produce the indexes, and then a new array that can be assigned to your variable: */
const b = [...Array(n).keys()]
// [0,1,2,3]
~~~~