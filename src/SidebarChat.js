import React,{useState,useEffect} from 'react';
import './SidebarChat.css';
import Avatar from '@mui/material/Avatar';


function SidebarChat({key,name}) {
    const [avatarName, setAvatarName] = useState('');
       
    useEffect(() => {
        const randomString = Math.random().toString(36).substring(2, 10);
        setAvatarName(randomString);
      }, []);


      const avatarUrl = `https://robohash.org/${avatarName}.png`;

  return (
    <div className='sidebarChat'>
        <div className='sidebarChat__avatar'>
            <Avatar src={avatarUrl} style={{marginRight:'15px'}}/>
        </div>

        <div className='sidebarChat__info'>
            <h3 className='sidebarChat__infoName'>
                {name}
            </h3>
            <p className='sidebarChat__infoText'>
                hi sup 
            </p>
        </div>
    </div>
  )
}

export default SidebarChat