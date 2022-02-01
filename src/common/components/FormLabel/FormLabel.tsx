import React from 'react'

import clsx from 'clsx'

import s from './FormLabel.module.scss'

export interface IFormLabelProps {
  className?: string
}

export const FormLabel: React.FC<IFormLabelProps> = ({
  className,
  children,
}) => {
  return (
    <div className={clsx(s.FormLabel__container, className)}>{children}</div>
  )
}
