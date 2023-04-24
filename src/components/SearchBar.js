import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'


const SearchBar = () => {
  return (
    <Paper component="form" onSubmit={()=>{}} 
    sx={{borderRadius:20, border: "1px solid #e3e3e3", pl:2, boxShadow: "none", overflow:"hidden"  }}>
        <input className='search-bar' placeholder='Search Bar' value=""  onChange={()=>{}} />
        <IconButton type="submit" sx={{p:'5px' , color: "red"}}>
            <i class="fa-solid fa-magnifying-glass"></i>
        </IconButton>
    </Paper>
  )
}

export default SearchBar