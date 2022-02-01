import React from 'react'

import clsx from 'clsx'

import { CloseIcon } from 'src/common/components/_icons/CloseIcon'
import { IOverlayProps, Overlay } from 'src/common/components/Overlay/Overlay'

import s from './UsualModal.module.scss'

export interface IUsualModalProps extends IOverlayProps {
  className?: string
}

export const UsualModal: React.FC<IUsualModalProps> = ({
  children,
  className,
  ...overlayProps
}) => {
  return (
    <Overlay {...overlayProps}>
      <div className={clsx(s.UsualModal__container, className)}>
        <div className={s.UsualModal__header}>
          <div onClick={overlayProps.onClose} className={s.UsualModal__icon}>
            <CloseIcon fillOpacity={0.5} />
          </div>
        </div>

        <div>{children}</div>
      </div>
    </Overlay>
  )
}
