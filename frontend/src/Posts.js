import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';

const sections = [
    { title: 'Homepage', url: '/' },
    { title: 'Posts', url: '/posts' },
    { title: 'About Me', url: '/aboutme' },
];

export default function Posts({contacts}) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Blog" sections={sections} />
                <main>
                    <Grid container spacing={4}>
                        {contacts.map((post) => (
                            <FeaturedPost key={post.header} post={post} />
                        ))}
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
}