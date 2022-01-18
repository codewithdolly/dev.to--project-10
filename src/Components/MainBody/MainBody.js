import React from 'react';
import "./MainBody.scss";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import JSImg from "../Images/js.png";

const MainBody = () => {
    return (
        <>
        <div className="mainBody">
        <Card sx={{ maxWidth: 800 }} className="mainBody--card">
      <CardMedia
        component="img"
        height="200"
        image={JSImg}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
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
