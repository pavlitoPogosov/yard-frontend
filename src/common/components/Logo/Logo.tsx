import React from 'react'

import { LogoIcon } from '../_icons/LogoIcon'

import s from './Logo.module.scss'

export interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <div className={s.Logo__container}>
      <LogoIcon className={s.Logo__img} />

      <div className={s.Logo__content}>
        <div className={s.Logo__name}>Двор</div>
        <div className={s.Logo__description}>Веб-приложение</div>
      </div>
    </div>
  )
}
