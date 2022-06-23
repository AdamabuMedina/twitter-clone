import React from 'react'
import "./Sidebar.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption/SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <TwitterIcon />

      <SidebarOption active Icon={HomeIcon} text="Главная" />
      <SidebarOption Icon={SearchIcon} text="Обзор" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Уведомления" />
      <SidebarOption Icon={MailOutlineIcon} text="Сообщения" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Закладки" />
      <SidebarOption Icon={ListAltIcon} text="Списки" />
      <SidebarOption Icon={PermIdentityIcon} text="Профиль" />
      <SidebarOption Icon={MoreHorizIcon} text="Еще" />

      <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar