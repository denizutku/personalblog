import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';
import Welcome from './components/Welcome';
import Footer from './components/Footer'

const sections = [
    { title: 'Homepage', url: '/' },
    { title: 'Posts', url: '/posts' },
    { title: 'About Me', url: '/aboutme' },
];

export default function Homepage({contacts}) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Blog" sections={sections} />
                <main>
                    <Welcome/>
                    <Grid container spacing={4}>
                        {contacts.slice(0,2).map((post) => (
                            <FeaturedPost key={post.header} post={post} />
                        ))}
                    </Grid>
                </main>
            </Container>
            <Footer title="Personal Blog" description="Built with Spring boot and ReactJS" />
        </React.Fragment>
    );
}