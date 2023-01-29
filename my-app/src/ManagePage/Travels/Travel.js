import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from 'stylis';
import createCache from "@emotion/cache";
import {Button} from '@mui/material';
import './Travel.css'
import { PropaneSharp } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const Travel =(Props)=>{
  const numbers = [11,12,13,14];

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const tt = <span >•</span>+Props.dest+<span>+</span>;
return (
    <>
        <Card className={classes.root} id="cardcss" >
      <CardHeader id="headercss"
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            
          </Avatar>
        }
      
       title= {<><span>נסיעה מ</span>{Props.dest}&nbsp;<span>לכיוון</span>&nbsp;{Props.from}</>}
       
        subheader="September 14, 2016"
      />
  <h1>נדרש:</h1>
  <br/>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  {Props.ls.map((num) => <Grid item xs={6} id="GridCss"><b>•{num}</b>
  
</Grid>)}
</Grid>

      <CardContent>
     
      </CardContent>
      <CardActions disableSpacing>
           
      </CardActions><Button variant="contained" id="ll"><b>אני רוצה לעשות טוב😁</b></Button>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
        </CardContent> 
        
      </Collapse>
    
    </Card>
  </>
)
}
export default Travel
