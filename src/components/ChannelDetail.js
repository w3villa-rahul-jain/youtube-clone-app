import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import  Videos  from './Videos'
import  ChannelCard  from './ChannelCard'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const {id} = useParams();
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]))
    
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data?.items))
  },[id])
  return (
    <Box>
      <Box>
        <div style={{backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
        zIndex : 10,
        height: '200px'
      }} 
        />
        <ChannelCard channelDetail = {channelDetail} marginTop='-130px' />
      </Box> 
      <Box display="flex"  p="2" >
        <Box sx={{mr: {sm: "100px"}}} />
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail