import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import About from './components/About';

const sections = [
    { title: 'Homepage', url: '/' },
    { title: 'Posts', url: '/posts' },
    { title: 'About Me', url: '/aboutme' },
];

export default function Aboutme({contacts}) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Blog" sections={sections} />
                <main>
                    <About/>
                </main>
            </Container>
        </React.Fragment>
    );
}