import React, { useEffect,useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

function PostDetail({match}) {
    useEffect(() => {
        fetchPost();
}, []);

const sections = [
    { title: 'Homepage', url: '/' },
    { title: 'Posts', url: '/posts' },
    { title: 'About Me', url: '/aboutme' },
];

const [post, setPost] = useState({});
const [user, setUser] = useState({});

const fetchPost = async () => {
    const fetchPost = await fetch(`http://localhost:8080/posts/${match.params.id}`)
    const post = await fetchPost.json();
    setPost(post);
    const user = post.user;
    setUser(user);
};

return (
    <div>
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Blog" sections={sections} />
                <main>
                    <Grid container spacing={3} direction="row"
                    >
                        <Box
                            alignItems="left"
                            display="flex"
                            flexDirection="column"
                            m="2rem"
                        >
                            <Typography variant="h3" color="textPrimary" gutterBottom>
                                {post.header}
                            </Typography>
                            <Typography variant="button" color="primary" gutterBottom >
                                {user.name_surname} // {post.date}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                {post.context}
                            </Typography>
                        </Box>
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    </div>
)
}

export default PostDetail;