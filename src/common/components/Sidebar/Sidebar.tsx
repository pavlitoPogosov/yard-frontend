import React from 'react'

import clsx from 'clsx'

import { DoubleLeftIcon } from '../_icons/sidebar/DoubleLeftIcon'
import { Logo } from '../Logo/Logo'

import { SidebarItem } from './SidebarItem/SidebarItem'
import { SIDEBAR_ITEMS, SidebarItemTypesEnum } from './SidebarItems'

import s from './Sidebar.module.scss'

export interface ISidebarProps {
  className?: string
  activeItemType?: SidebarItemTypesEnum
}

export const Sidebar: React.FC<ISidebarProps> = ({
  className,
  activeItemType,
}) => {
  return (
    <aside className={clsx(s.Sidebar__container, className)}>
      <div className={s.Sidebar__header}>
        <Logo />
      </div>

      <nav>
        <ul className={s.Sidebar__list}>
          {SIDEBAR_ITEMS.map((item, i) => (
            <li key={i}>
              <SidebarItem
                key={i}
                isActive={activeItemType === item.iconType}
                {...item}
              />
            </li>
          ))}
        </ul>
      </nav>

      <div className={s.Sidebar__left}>
        <DoubleLeftIcon />
      </div>
    </aside>
  )
}
