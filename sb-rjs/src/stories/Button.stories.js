import Button from '../components/Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        handleClick: { action: 'clicou no botão' },
        label: { defaultValue:'Press me'}
    }
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    backgroundColor: 'lightblue',
    size: 'md'
};

// export const tomato = () => <Button label='Press me' backgroundColor='tomato' />;
export const Tomato = Template.bind({});
Tomato.args = {
    backgroundColor: 'tomato',
    label: 'Press me now',
    size: 'md'
};

export const LargeTomato = Template.bind({});
LargeTomato.args = {
    ...Tomato.args,
    size: 'lg'
}

export const Small = Template.bind({});
Small.args = {
    backgroundColor: 'lightblue',
    size: 'sm'
};
export const Large = Template.bind({});
Large.args = {
    backgroundColor: 'lightblue',
    size: 'lg'
};