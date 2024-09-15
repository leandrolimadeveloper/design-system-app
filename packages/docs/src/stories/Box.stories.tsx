import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ui/react'

export default {
    title: 'Surface/Box',
    component: Box,
    args: {
        children: (
            <>
                <span>Testando o elem Box</span>
            </>
        )
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
    
}
