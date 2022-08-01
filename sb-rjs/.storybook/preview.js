import "@storybook/addon-console";
import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
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

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
