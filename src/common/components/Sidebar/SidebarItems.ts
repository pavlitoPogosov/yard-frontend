import { MapIcon } from '../_icons/sidebar/MapIcon'

import s from './Sidebar.module.scss'

export enum SidebarItemTypesEnum {
  HOUSE_ON_MAP = 'house_on_map',
}

export interface ISidebarItem {
  text: string
  icon: React.FC
  iconClassName: string
  iconType: SidebarItemTypesEnum
}

export const SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    icon: MapIcon,
    iconClassName: s.Sidebar__mapIcon,
    iconType: SidebarItemTypesEnum.HOUSE_ON_MAP,
    text: 'Дома на карте',
  },
]
