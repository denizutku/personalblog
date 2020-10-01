import React, { useEffect,useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PostForm from './PostForm'

function PostDetail() {

const sections = [
    { title: 'Homepage', url: '/' },
    { title: 'Posts', url: '/posts' },
    { title: 'About Me', url: '/aboutme' },
];

return (
    <div>
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Blog" sections={sections} />
                <main>
                    <Grid container spacing={3}>
 
                        <Grid item xs={12}>
                            <Box
                                alignItems="center"
                                display="flex"
                                flexDirection="column"
                            >
                                <PostForm/>
                            </Box>
                        </Grid>
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    </div>
)
}

export default PostDetail;