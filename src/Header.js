import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { useDataLayerValue } from './DataLayer';

const Header = () => {
    const [{user},dispatch] = useDataLayerValue()
  return (
    <header className='header'>
      <section className="header-left">
        <SearchIcon />
        <input
        placeholder='Search for Artists, Songs,'
        type='text'
        />
      </section>
      <section className="header-right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </section>
    </header>
  )
}

export default Header
