import React from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';
import { spotify } from './App';

const Body = () => {
  const [{discover_weekly},dispatch] = useDataLayerValue()

  const playPlaylist = (id)=>{
    console.log(id)
    spotify.play({uri:`spotify:playlist:37i9dQZEVXcS7lMl5kmdTQ`}).then((res)=>{
      spotify.getMyCurrentPlayingTrack().then((r)=>{
        dispatch({
          type:'SET_ITEM',
          item:r.item
        })
        dispatch({
          type:'SET_PLAYING',
          playing:true
        })
      })
    })
  }

const playSong = (id)=>{
  spotify.play({
    uris:[`spotify:track:${id}`]
  })
  .then((res)=>{
    spotify.getMyCurrentPlayingTrack().then((r)=>{
      dispatch({
        type:'SET_ITEM',
        item:r.item
      })
      dispatch({
        type:'SET_PLAYING',
        playing:true
      })
    })
  })
}
  return (
    <main className='body'>
      <Header  />
      <section className="body-info">
        <img 
            src={discover_weekly?.images[0].url}
            alt="" 
        />
        <section className="body-infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
        </section>
      </section>
      <div className='body-songs'>
        <div className="body-icons">
           <PlayCircleFilledIcon 
             className='body-shuffle'
             onClick={playPlaylist}
           />
           <FavoriteIcon 
           fontSize='large'/>
           <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item)=>(
          <SongRow track={item.track}   playSong={playSong} key={item.id}/>
        ))}
      </div>
    </main>
  )
}

export default Body
