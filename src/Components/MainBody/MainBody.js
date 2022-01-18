import React from 'react';
import "./MainBody.scss";
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import JSImg from "../Images/js.png";
import { Avatar } from '@mui/material';

const MainBody = () => {
    return (
        <>
        <div className="mainBody">
        
       
        <Card sx={{ maxWidth: 700}} className="mainBody--card">
      <CardMedia
        component="img"
        height="300"
        image={JSImg}
        alt="green iguana"
      />
      <CardContent>
      <div className='d-flex'>
      <Avatar src={JSImg} className='mr-2' />
        <Typography gutterBottom>
        Tapas Adhikary <br /> jan 18
        </Typography>
        </div>
      <Link to="/">
        <Typography gutterBottom variant="h4">
        JavaScript object destructuring usages you must know
        </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
            
        </>
    )
}

export default MainBody
