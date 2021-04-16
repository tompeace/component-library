import 'twin.macro'
import { ReactElement } from 'react'

interface TextInputProps {
  placeholder?: string;
  value?: string;
  onChange(e: any): void
}

export default function TextInput(props: TextInputProps): ReactElement {
  return (
    <input
      tw='border border-black'
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  )
}