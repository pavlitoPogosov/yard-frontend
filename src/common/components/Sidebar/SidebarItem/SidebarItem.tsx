import React from 'react'

import clsx from 'clsx'

import Link from 'next/link'

import { ISidebarItem } from '../SidebarItems'

import s from './SidebarItem.module.scss'

export interface ISidebarItemProps extends ISidebarItem {
  className?: string
  isActive?: boolean
}

export const SidebarItem: React.FC<ISidebarItemProps> = ({
  className,
  icon,
  iconClassName,
  text,
  isActive,
}) => {
  return (
    <Link href="/">
      <div
        className={clsx(
          s.SidebarItem__container,
          isActive && s.SidebarItem_active,
          className
        )}
      >
        <div className={clsx(s.SidebarItem__icon, iconClassName)}>
          {icon({})}
        </div>

        <div className={s.SidebarItem__text}>{text}</div>
      </div>
    </Link>
  )
}
