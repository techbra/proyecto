import React from 'react'
import { Toolbar, AppBar, Typography, Button } from '@mui/material'
 

function Header({ setIsAdding }) {
    return (
        <header>
          <AppBar position="static" sx={{backgroundImage:" linear-gradient(90deg, rgba(180,58,151,1) 0%, rgba(29,203,253,1) 50%, rgba(252,179,69,1) 100%);"}}>
        <Toolbar>
                <Typography variant="h3" component="h2">
   Employee Management Software
           </Typography>
    
           </Toolbar>
            </AppBar>
            <div style={{ marginTop: '50px', marginBottom: '20px' }}>
                <Button variant="contained" color="secondary" size="medium" onClick={() => setIsAdding(true)} className='round-button'>Add Button</Button>
            </div>
          
        </header>
    )
}

export default Header