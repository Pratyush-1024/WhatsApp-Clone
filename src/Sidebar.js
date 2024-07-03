import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import FilterListIcon from '@mui/icons-material/FilterList';
import SidebarChat from './SidebarChat';
import { Unsubscribe } from '@mui/icons-material';
import { db } from './firebase';

function Sidebar({addNewChat}) {

  const [chats,setChats]=useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('chats').onSnapshot(snapshot => (
      setChats(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(), 
        }))
      )
    ));
  
    return () => {
      unsubscribe(); 
    };
  }, []); 
  

  const createChat=()=>{
    const chatName=prompt('Please enter name for the chat');
    if(chatName){

    }
  };
  return !addNewChat?(
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__headerLeft'>
            <Avatar src='https://media-bom1-1.cdn.whatsapp.net/v/t61.24694-24/306944327_476305764406504_5548217531415587777_n.jpg?ccb=11-4&oh=01_AdQ3DTcB_t61QUvt_ElYbONFWuiYPXrVocU1wSyhM7TXKQ&oe=6559EAD7&_nc_sid=e6ed6c&_nc_cat=101' alt='avatar'/>
        </div>

        <div className='sidebar__headerRight'>

        <IconButton><PeopleIcon style={{color:'gray'}}/></IconButton>
        <IconButton><DonutLargeIcon style={{color:'gray'}}/></IconButton>
            
        <IconButton><PodcastsIcon style={{color:'gray'}}/></IconButton>
        <IconButton><ChatIcon style={{color:'gray'}}/></IconButton>

        <IconButton><MoreVertIcon style={{color:'gray'}}/></IconButton>

        </div>
      </div>

      <div className='sidebar__headerSearchp'>
      <div className='sidebar__headerSearch'>

<SearchIcon style={{color:'gray',marginRight:'5px'}}/>
  <input placeholder='Search the chats'></input>

  

  
</div>

<IconButton><FilterListIcon style={{color:'gray'}}/></IconButton>
      </div>

    {chats.map(chat=>(
      <SidebarChat key={chat.id}
      name={chat.data.name}/>
    ))}



    </div>
  ):(
    <div onClick={createChat} className='sidebar__chat'>
      <h2>Add New Chat</h2>
    </div>
  );
}

export default Sidebar;