import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import React from 'react'

export interface ButtonProps {
  text: string
  color?: string
  leftIcon?: boolean | React.ReactNode
  rightIcon?: boolean | React.ReactNode
}

const colorSelector: Record<string, string> = {
  brand: 'bg-brand-600/75 text-primary-50 hover:bg-brand-500 focus:ring-brand-800',
  primary: 'bg-primary-600/75 text-primary-100 hover:bg-primary-500 focus:ring-primary-200',
}

export default function Button({
  text,
  color = 'primary',
  leftIcon = false,
  rightIcon = false,
  className,
  ...props
}: ButtonProps & React.ComponentProps<'div'>) {
  const classColor = colorSelector?.[color]

  return (
    <div
      {...props}
      className={`inline-flex h-full items-center rounded-full px-4 focus:outline-none focus:ring-2 ${classColor} ${
        leftIcon && 'pl-2'
      } ${rightIcon && 'pr-2'} ${className}`}
    >
      {leftIcon && <IconChevronLeft className="h-4 pr-2" />}
      <span className="text-left font-semibold">{text}</span>
      {rightIcon && <IconChevronRight className="h-4 pl-2" />}
    </div>
  )
}
