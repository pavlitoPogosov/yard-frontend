import React from 'react'

import { LogoIcon } from 'src/common/components/_icons/LogoIcon'

import s from './AuthModalHeader.module.scss'

export interface IAuthModalHeaderProps {
  title: string
  description: string
}

export const AuthModalHeader: React.FC<IAuthModalHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className={s.AuthModalHeader__container}>
      <div>
        <LogoIcon className={s.AuthModalHeader__logo} />
      </div>

      <h3 className={s.AuthModalHeader__title}>{title}</h3>
      <p className={s.AuthModalHeader__description}>{description}</p>
    </div>
  )
}
