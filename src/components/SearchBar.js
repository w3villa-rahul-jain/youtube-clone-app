import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  return (
    <Paper component="form" onSubmit={handleSubmit} 
    sx={{borderRadius:20, border: "1px solid #e3e3e3", pl:2, boxShadow: "none", overflow:"hidden"  }}>
        <input className='search-bar' placeholder='Search Bar' value={searchTerm}  onChange={(e)=>setSearchTerm(e.target.value)} />
        <IconButton type="submit" sx={{p:'5px' , color: "red"}}>
            <i className="fa-solid fa-magnifying-glass"></i>
        </IconButton>
    </Paper>
  )
}

export default SearchBar