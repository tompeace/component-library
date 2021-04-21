import tw, { styled } from 'twin.macro'

interface TextInputProps {
  disabled?: boolean;
}

const TextInput = styled.input(({ disabled }: TextInputProps) => [
  tw`px-4 py-2 border-2 border-black rounded focus:outline-none`,
  disabled && tw`border-gray-600 bg-gray-300`
])

export default TextInput