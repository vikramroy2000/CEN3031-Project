import React from 'react';

import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../../actions/posts';

import useStyles from './styles';

function ImageCarousel(props) {
  const classes = useStyles();
  const { post } = props;
    return (
      <Carousel autoPlay={false} >
        <CardMedia className={classes.media} image={post.file1} title={post.title} />
        <CardMedia className={classes.media} image={post.file2} title={post.title} />
        <CardMedia className={classes.media} image={post.file3} title={post.title} />
      </Carousel>
    )
}

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const isLoggedIn = true;
    return (
      <Card className={classes.card}>
        <ImageCarousel post={post}></ImageCarousel>
        <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2"></Typography>
        </div>
        
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2"></Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          {isLoggedIn && <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>}
        </CardActions>
      </Card>
    );
}

export default Post;