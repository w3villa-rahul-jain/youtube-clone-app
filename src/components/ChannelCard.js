import React from 'react'
import { Box , CardContent, cardContent, CardMedia, cardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
import { flexbox } from '@mui/system';

const ChannelCard = ({channelDetail, marginTop}) =>  (
  <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '308px',
        margin: 'auto',
        marginTop
      }}
    >
      {console.log(channelDetail)}
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{ display:'flex', flexDirection:'column', justifyContent:"center", textAlign:"center", color:"#fff" }}
        >
          <CardMedia image={channelDetail?.snippet?.thumbnail?.high?.url || demoProfilePicture }
            alt={channelDetail?.snippet?.title}
            sx={{height: 200, width:200, borderRadius:"50%"}}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize: '14px', ml:1}} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && 
            <Typography>
              {channelDetail?.statistics?.subscriberCount.toLocaleString()} Subscriber
            </Typography>
          }
        </CardContent>
      </Link>
    </Box>
  )


export default ChannelCard