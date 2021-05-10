import tw, { styled } from 'twin.macro'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger'
  isSmall?: boolean
}

const Button = styled.button(({ 
  variant = 'primary', 
  isSmall
}: ButtonProps) => [
  tw`px-8 py-2 border-2 rounded focus:outline-none active:scale-105 transform duration-75`,
  variant === 'primary' && tw`bg-black text-white border-black`,
  variant === 'secondary' && tw`bg-white border-black text-black`,
  variant === 'danger' && tw`bg-red-300 border-red-500 text-red-500`,
  isSmall ? tw`text-sm` : tw`text-lg`
])

export default Button
