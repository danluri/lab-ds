import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: "Create account",
    },
    argTypes: {}
} as Meta<ButtonProps>

//Tipos que aparecerão no storybook
export const Default: StoryObj = {}
