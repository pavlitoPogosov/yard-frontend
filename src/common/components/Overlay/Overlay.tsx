import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import clsx from 'clsx'

import { useDisableOverflow } from 'src/common/hooks/useDisableOverflow'

import s from './Overlay.module.scss'

export interface IOverlayProps {
  blackoutClassName?: string
  childrenWrapperClassName?: string
  contentClassName?: string
  disableClose?: boolean
  disableEscClose?: boolean
  disableOverflowControl?: boolean
  isOpen: boolean
  onClose: () => void
}

/* TODO add animation */
export const Overlay: React.FC<IOverlayProps> = ({
  blackoutClassName,
  children,
  childrenWrapperClassName,
  contentClassName,
  disableClose,
  disableEscClose,
  disableOverflowControl,
  isOpen,
  onClose,
}) => {
  useDisableOverflow(isOpen, disableOverflowControl)

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !disableEscClose && !disableClose) {
        onClose()
      }
    }

    if (isOpen) {
      window && window.addEventListener('keyup', handleKeyUp)
    }

    return () => window && window.removeEventListener('keyup', handleKeyUp)
  }, [isOpen, disableEscClose, disableClose, onClose])

  if (!isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <>
      <div className={clsx(s.Overlay__blackout, blackoutClassName)} />

      <div
        className={clsx(s.Overlay__content, contentClassName)}
        onMouseDown={!disableClose ? onClose : undefined}
      >
        <div
          className={clsx(s.Overlay__childrenWrapper, childrenWrapperClassName)}
          onMouseDown={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>,
    document.body
  )
}
