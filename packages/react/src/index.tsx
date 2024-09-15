import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  padding: '$2 $4',
  border: 0,
  fontWeight: 'bold',
  color: '$white',
})

export function App() {
  return <Button>Hello world</Button>
}
