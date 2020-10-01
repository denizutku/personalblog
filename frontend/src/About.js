import React from 'react';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    Typography,
    makeStyles,
    IconButton
} from '@material-ui/core';

const user = {
    avatar: 'https://i.imgur.com/md8g1Za.png',
    city: 'Istanbul',
    country: 'Turkey',
    jobTitle: 'Developer',
    name: 'Deniz Utku Beydogan',
    about: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    avatar: {
        height: 100,
        width: 100
    }
}));

export default function About({ className, ...rest }) {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3} direction="row"
                  justify="center">
                <Grid item xs={12} sm={6}>
                    <div className={classes.root}>
                        <Card
                            className={clsx(classes.root, className)}
                            {...rest}
                        >
                            <CardContent>
                                <Box
                                    alignItems="center"
                                    display="flex"
                                    flexDirection="column"
                                >
                                    <Avatar
                                        className={classes.avatar}
                                        src={user.avatar}
                                    />
                                    <Typography
                                        color="textPrimary"
                                        variant="h4"
                                    >
                                        {user.name}
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        variant="h5"
                                    >
                                        {`${user.jobTitle}`}
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        gutterBottom
                                        variant="body1"
                                    >
                                        {`${user.city} ${user.country}`}
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        variant="body1"
                                    >
                                        {`${user.about}`}
                                    </Typography>
                                </Box>
                                <CardActions>
                                    <IconButton>
                                        <GitHubIcon />
                                    </IconButton>
                                    <IconButton>
                                        <TwitterIcon />
                                    </IconButton>
                                    <IconButton>
                                        <EmailIcon />
                                    </IconButton>
                                    <IconButton>
                                        <LanguageIcon />
                                    </IconButton>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}