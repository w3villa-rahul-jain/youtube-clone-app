
import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=> setVideos(data.items))
    },[searchTerm]);
    
  return (
    <Box p={2} sx={{overflowY: "auto", height: "90vh", flex:2}}>
      <p class="searchterm">{searchTerm}</p>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed