import React from 'react'

import { Button } from 'src/common/components/Button/Button'
import { useToggle } from 'src/common/hooks/useToggle'

import { HeaderAuthModal } from './HeaderAuthModal/HeaderAuthModal'

import s from './Header.module.scss'

export interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
  const authModalToggler = useToggle()

  return (
    <header className={s.Header__container}>
      <Button>Написать отзыв</Button>

      <Button onClick={authModalToggler.set} className={s.Header__authBtn}>
        Авторизация
      </Button>

      {authModalToggler.value && (
        <HeaderAuthModal
          isOpen={authModalToggler.value}
          onClose={authModalToggler.unset}
        />
      )}
    </header>
  )
}
