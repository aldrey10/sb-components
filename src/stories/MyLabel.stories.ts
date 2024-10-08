import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, Props } from "../components/MyLabel";



const meta:Meta<Props> = {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags:['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: { control: 'inline-radio' },
        fontColor: { control: 'color' }
    }
} satisfies Meta<typeof MyLabel>;


export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: 'Basic label'
    }
}

export const AllCaps: Story = {
    args: {
        label: 'All Caps label',
        capitalized: true
    }
}

export const Secondary: Story = {
    args: {
        label: 'Secondary label',
        color: 'text-secondary'
    }
}

export const CustomColor: Story = {
    args: {
        label: 'Custom color label',
        fontColor: '#5517ac'
    }
}


    export const CustomBackgroundColor: Story = {
        args: {
            fontColor: 'white',
            backgroundColor: 'black',
            label: 'Custom color label',
        }
    }



