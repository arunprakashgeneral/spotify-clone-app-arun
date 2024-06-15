import React, { useEffect } from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { useDataLayerValue } from './DataLayer';
import { spotify } from './App';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

const Footer = () => {
  const [{spotify,item,token,playing},dispatch] = useDataLayerValue()
  

  useEffect(()=>{
    spotify.getMyCurrentPlaybackState().then((r)=>{
      console.log(r)
      dispatch({
        type:'SET_PLAYING',
        playing:r.is_playing
      })
      dispatch({
        type:'SET_ITEM',
        item:r.item
      })
    })
  },[spotify])

  const handlePlayPause = ()=>{    
    if(playing){
      spotify.pause()
      dispatch({
        type:'SET_PLAYING',
        playing:false
       })
    } else{
      spotify.play()
      dispatch({
        type:'SET_PLAYING',
        playing:true
      })
    }
  }

  const skipNext = ()=>{
    spotify.skipToNext()
    spotify.getMyCurrentPlayingTrack.then((r)=>{
      dispatch({
        type:'SET_ITEM',
        item:r.item
      })
      dispatch({
        type:'SET_PLAYING',
        playing:true
       })
    })
  }

  const skipPrevious = ()=>{
    spotify.skipToPrevious()
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
  }
  return (
    <footer className='footer'>
        <section className="footer-left">
           <img 
           className='footer-albumLogo'
           src={item?.album.images[0].url} 
           alt={item?.name} />
           {item?(
           <div className="footer-songInfo">
            <h4>{item?.name}</h4>
            <p>{item?.artists.map((artist)=>artist.name).join(',')}</p>
           </div>
           ):(
            <div className="footer-songInfo">
              <h4>No song is playing</h4>
            </div>
           )}
        </section>
        <section className="footer-center">
           <ShuffleIcon className='footer-green' />
           <SkipPreviousIcon className='footer-icon' onClick={skipNext} />
           {playing?(
              <PauseCircleOutlineIcon onClick={handlePlayPause}
                fontSize='large' className='footer-icon' />
            ):(
              <PlayCircleOutlineIcon fontSize='large' className='footer-icon' onClick={handlePlayPause} />
            )
           }
           <SkipNextIcon className='footer-icon'  onClick={skipPrevious}/>
           <RepeatIcon className='footer-green' />
        </section>
        <section className="footer-right">
            <Grid container spacing={2}>
                <Grid item>
                  <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                  <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                  <Slider />
                </Grid>
            </Grid>

        </section>
      
    </footer>
  )
}

export default Footer
