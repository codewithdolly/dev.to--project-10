import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Badge from '@mui/material/Badge';
import Logo from "./Components/Images/logo.png"
import Dolly from "./Components/Images/dolly.jpg"
import { styled, alpha } from '@mui/material/styles';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const App = () => {
  return (
    <>
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
      <img src={Logo} alt="" width="70px" height="45px" className='ml-5 rounded' />
     

  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <Search className='form-inline m-2 my-lg-0 collapse navbar-collapse'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
  {/* <form className="form-inline m-2 my-lg-0 collapse navbar-collapse">     
       <input className="form-control mr-sm-2 pr-3" type="search" placeholder="Search" aria-label="Search" />

       </form> */}

    
   <div className='mr-5'>
   <button className="btn btn-outline-info">Create Post</button>
   <Badge badgeContent={4} color="error">
      <NotificationsNoneIcon color="action" sx={{fontSize:"35px"}} />
    </Badge>
    <Avatar alt="User Name" src={Dolly} />

   </div>
  </div>
</nav>
</Router>
    </>
  )
}

export default App
