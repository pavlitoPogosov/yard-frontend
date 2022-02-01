import React from 'react'

import clsx from 'clsx'

import { Header } from 'src/common/components/Header/Header'
import { Sidebar } from 'src/common/components/Sidebar/Sidebar'
import { SidebarItemTypesEnum } from 'src/common/components/Sidebar/SidebarItems'

import s from './MainLayout.module.scss'

export interface MainLayoutProps {
  className?: string
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <main className={clsx(s.MainLayout__container, className)}>
      <Sidebar
        className={s.MainLayout__sidebar}
        activeItemType={SidebarItemTypesEnum.HOUSE_ON_MAP}
      />

      <section className={s.MainLayout__content}>
        <Header />

        <div className={s.MainLayout__inner}>{children}</div>
      </section>
    </main>
  )
}
