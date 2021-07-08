import React from 'react';  
import MenuItem from '@material-ui/core/MenuItem';  
import {Link} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
export default function MenuDemo() {   
        return (  
                        <React.Fragment> 
                         <Toolbar component="nav" variant="dense">
                          <MenuItem> <Link to="/">Home</Link></MenuItem>
                          <MenuItem> <Link to="/login">Login</Link></MenuItem>
                          </Toolbar> 
                        </React.Fragment>
        );  
}  