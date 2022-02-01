import React from 'react'

import { UsualModal } from 'src/common/components/_modals/UsualModal/UsualModal'

import { AuthLogin } from './AuthLogin/AuthLogin'

export interface IHeaderAuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export const HeaderAuthModal: React.FC<IHeaderAuthModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <UsualModal isOpen={isOpen} onClose={onClose}>
      <AuthLogin />
    </UsualModal>
  )
}
