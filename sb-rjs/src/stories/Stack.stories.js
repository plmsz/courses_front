import Stack from "../components/Stack";

export default {
	title: "Components/Stack",
	component: Stack,
	argTypes: {
		numberOfChildren: { type: "number" },
	},
	args: {
		numberOfChildren: 4,
	},
};

const Template = ({ numberOfChildren, ...args }) => (
	<Stack {...args}>
		{[...Array(numberOfChildren).keys()].map((element, index) => (
			<div
				key={index}
				style={{
					width: "50px",
					height: "50px",
					backgroundColor: "red",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{element + 1}
			</div>
		))}
	</Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
	direction: "row",
	spacing: 2,
	wrap: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
	direction: "column",
	spacing: 2,
	wrap: false,
};

export const NoSpacing = Template.bind({});
NoSpacing.args = {
	direction: "column",
	spacing: 0,
	wrap: false,
};
export const WrapOverflow = Template.bind({});
WrapOverflow.args = {
	numberOfChildren: 20,
	direction: "row",
	spacing: 2,
	wrap: true,
};
