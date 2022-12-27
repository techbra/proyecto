import React from 'react'
import { Toolbar, AppBar, Typography, Button } from '@mui/material'
 

function Header({ setIsAdding }) {
    return (
        <header>
          <AppBar position="static" sx={{backgroundImage:"  radial-gradient(circle, rgba(172,217,164,1) 0%, rgba(153,148,233,1) 100%);"}}>
        <Toolbar>
                <Typography variant="h3" component="h2">
   Employee Management Software
           </Typography>
    
           </Toolbar>
            </AppBar>
            <div style={{ marginTop: '50px', marginBottom: '20px' }}>
                <Button variant="outlined" color="secondary" size="medium" onClick={() => setIsAdding(true)} className='round-button'>Add </Button>
            </div>
          
        </header>
    )
}

export default Header