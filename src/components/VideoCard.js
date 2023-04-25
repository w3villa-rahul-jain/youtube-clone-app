import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia, sliderClasses } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from '../utils/constants'

const VideoCard = ({ video: { id:{videoId}, snippet } }) => {
  return (
    <Card sx={{width: {md:'320px', sx:'100%'}}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
        <CardMedia
          alt={snippet?.title}
          sx={{height: 180, width: 368}}
          image={snippet?.thumbnails?.high?.url } />
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: '100px'}} >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
          <Typography>
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
          </Typography>
        </Link> 
        <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoVideoUrl }>
          <Typography>
            {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
            <CheckCircle sx={{fontSize: '12px', ml:1}} />
          </Typography>
        </Link>
      </CardContent>
    </Card>

  )
}

export default VideoCard