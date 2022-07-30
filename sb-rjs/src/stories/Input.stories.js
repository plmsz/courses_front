//Exercise
import Input from '../components/Input';

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: { handleChange: {action: 'digitando' } }
};

const Template = args => <Input {...args} />;

export const InputRegular = Template.bind({})

InputRegular.args = {
    placeholder: 'type md input',
    size: 'sm'
}

InputRegular.storyName = 'Medium Input'

export const SmallInput = Template.bind({})

SmallInput.args = {
    placeholder: 'type sm input',
    size: 'md'
}

export const LargeInput = Template.bind({})
LargeInput.args = {
    placeholder: 'type lg input',
    size: 'lg'  
}