import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps  } from '@ignite-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quisquam. Id veritatis recusandae doloremque, laboriosam voluptate tenetur tempore numquam aliquam incidunt adipisci facilis dolorem voluptatum earum vitae debitis blanditiis maxime.'
            
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}