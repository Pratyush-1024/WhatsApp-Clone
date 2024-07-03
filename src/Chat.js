import React,{useState,useEffect} from 'react';
import './Chat.css';
import Avatar from '@mui/material/Avatar';
import DuoIcon from '@mui/icons-material/Duo';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

function Chat() {

  const [avatarName, setAvatarName] = useState('');

  useEffect(() => {
    const randomString = Math.random().toString(36).substring(2, 10);
    setAvatarName(randomString);
  }, []);


  const avatarUrl = `https://robohash.org/${avatarName}.png`;
  return (
    <div className='chat'>
        <div className='chat__header'>
          <div className='header__left'>
            <Avatar src={avatarUrl} style={{marginRight:'15px'}}/>
          </div>

          <div className='chat__headerInfo'>
          <h3 className='chat__infoName'>
                Sania
            </h3>
            <p className='chat__infoStatus'>
                online 
            </p>
          </div>

          <div className='chat__headerRight'>
            <IconButton><DuoIcon style={{color:'gray',marginRight:'5px'}}/></IconButton>
            <IconButton><SearchIcon style={{color:'gray',marginRight:'5px'}}/></IconButton>
            <IconButton><MoreVertIcon style={{color:'gray',marginRight:'5spx'}}/></IconButton>

          </div>
        </div>

        <div className='chat__body'>
          <p className='chat__message chat__receiver'>
            <span className='chat__messageName'>
              Me
            </span>
            **sticker**
            <span className='chat__messageTimestamp'>
              {new Date().toLocaleTimeString()}
            </span>
          </p>
        </div>

        <div className='chat__footer'>
          <IconButton><TagFacesIcon style={{color:'gray'}}/></IconButton>
          <IconButton><AddIcon style={{color:'gray'}}/></IconButton>
          <input placeholder='Type a message'/>
          <button className='chat__footerButton'type='submit'></button>
          <IconButton><KeyboardVoiceIcon style={{color:'gray'}}/></IconButton>
        </div>
    </div>
  )
}

export default Chat;