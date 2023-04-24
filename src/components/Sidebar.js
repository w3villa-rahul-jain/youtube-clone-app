import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const Sidebar = () => {
    const selectedCategory = 'New'

  return (
    <Stack direction="row" 
    sx={{ overflowY: 'auto', height: { sx:"auto", md: '95%' }, flexDirection: { md: "column"}}}>
        {
            categories.map((category)=>(
                <button className="category-btn" style={{background: category.name === selectedCategory && 'red'}}>
                    <span style={{opacity: category.name === selectedCategory ? 1 : .8}}>{category.icon}</span>
                    <span style={{opacity: category.name === selectedCategory ? 1 : .8}}>{category.name}</span>
             
                </button>
            ))
        }
    </Stack>    
  )
}

export default Sidebar