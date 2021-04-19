import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Carousel from 'react-material-ui-carousel';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';

import { deletePost, updatePost } from '../../../actions/posts';

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

const Post = ({ post }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

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
          {user?.result?.user === 'admin' && <Button size="small" color="primary" variant="contained" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>}
          {user?.result?.user === 'admin' && <Button size="small" color="primary" variant="contained" onClick={() => dispatch(updatePost(post._id, post))}>{post.display ? <Visibility/> : <VisibilityOff/>} Toggle Visiblity</Button>}
        </CardActions>
      </Card>
    );
}

export default Post;