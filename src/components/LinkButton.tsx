import Link from '@/components/Link'
import React from 'react'
import Button, { ButtonProps } from '@/components/Button'

interface LinkButtonProps extends ButtonProps, React.ComponentProps<'a'> {}

export default function LinkButton({
  text,
  color = 'primary',
  leftIcon = false,
  rightIcon = false,
  className,
  ...props
}: LinkButtonProps) {
  return (
    <Link {...props}>
      <Button text={text} color={color} leftIcon={leftIcon} rightIcon={rightIcon} className={className} />
    </Link>
  )
}
