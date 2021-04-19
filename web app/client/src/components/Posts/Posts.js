import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ isLoggedIn, setCurrentId }) => {
  const admin = JSON.parse(localStorage.getItem('profile'));
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress style={{color: "#f57e42"}}/> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={12} lg={12}>
            {(post?.display || admin?.result?.user === 'admin') && <Post isLoggedIn={isLoggedIn} post={post} setCurrentId={setCurrentId} />}
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;