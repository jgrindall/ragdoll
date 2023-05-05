import { forwardRef } from 'react'
import { RoundedBox } from '@react-three/drei'

const defaultArgs = [1, 1, 1]

const defaultProps = {
  transparent: false,
  opacity: 1,
  color: 'white',
  args: defaultArgs
}

export const Block = forwardRef(({ children, defaultProps, ...props }, ref) => {
  return (
    <RoundedBox args={args} receiveShadow castShadow ref={ref} {...props}>
      <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
      {children}
    </RoundedBox>
  )
})
