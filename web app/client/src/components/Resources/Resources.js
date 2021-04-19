import { Container, AppBar, Typography, Grow, Grid, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import content from './resourceContent.js';


const useStyles = makeStyles({
    root: {
    //   maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
  const MediaCard = (props) =>{
    const classes = useStyles();
  
    return (
    <Container maxWidth="lg" style={{margin: "10px 0px 0px"}}>
      <Card className={classes.root}>
          {/* <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          /> */}
          <CardContent>
            <Typography style={{textAlign: "left"}} gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography style={{textAlign: "left"}} variant="body2" color="textSecondary" component="p">
              {props.body}
            </Typography>
          </CardContent>
        <CardActions>
          {/* <Button size="small" color="primary">
            Share
          </Button> */}
          <Button href={props.link} style={{position: "relative", right: 0}} size="small" color="primary">
            {props.linkText}
          </Button>
        </CardActions>
      </Card>
    </Container>
    );
  }


const Resources = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit" style={{margin: "-10px 0 10px 0", borderRadius: 5}}>
                <Typography variant="h2" align="center" style={{color: "#"}}>Resources</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container align="center" justify="space-evenly" spacing={3}>
                        <Grid item xs={12} sm={12} lg={12}>
                            {content.map((block)=>{
                                return <MediaCard title={block.title} body={block.body} link={block.link} linkText={block.linkText}/>
                            })}
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default Resources;