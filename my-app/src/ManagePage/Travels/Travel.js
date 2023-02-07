import React from 'react';

import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from 'stylis';
import createCache from "@emotion/cache";
import './Travel.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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

const Travel =(Props)=>{
  const numbers = [11,12,13,14];
  
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
return (
    <>
        <Card  id="cardcss" >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} className="headercss">
       {<>{Props.dest}&nbsp;<span>לכיוון</span>&nbsp;{Props.from}</>}
        </Typography>
        <div style={{height: 7}}></div>
        <Grid  container 
  direction="row-reverse"
  justifyContent="center"
  alignItems="center">
        <Typography sx={{ fontSize: 14,marginLeft:10 }} className="secondLine">
       תאריך
        </Typography>
        <Typography sx={{ fontSize: 14 }} className="secondLine">
       שעה
        </Typography></Grid>        <div style={{height: 7}}></div>

        <Typography variant="h5" component="div">
         נדרש:
        </Typography>        <div style={{height: 7}}></div>

        <Typography sx={{ mb: 1 }} color="text.secondary" id="listOfItems" >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  {Props.ls.map((num) => <Grid item xs={5} id="GridCss"><b>•{num}</b>
  
</Grid>)}
</Grid>
        </Typography>
        
      </CardContent>
      <CardActions>
        
      <Button variant="contained" id="ll"><b>אני רוצה לעשות טוב😁</b></Button>
      </CardActions>
    </Card>  
  </>
)
}
export default Travel
{/* <Card className={classes.root} id="cardcss" >
      <CardHeader id="headercss"
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
          </Avatar> }
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
    </Card> */}