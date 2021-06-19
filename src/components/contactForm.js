import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import SendRoundedIcon from '@material-ui/icons/SendRounded';


const useStyles = makeStyles((theme) => ({
  fullList: {
    width: 'auto',
  },
  dragger: {
    height: '5px',
    borderRadius: '1rem',
    margin: theme.spacing('.5rem', 'auto', '1.5rem'),
    width: '35%'
  },
  subtitle: {
    fontSize: '1rem',
    color: 'var(--secondary-color)',
    maxWidth: '90%',
    margin: theme.spacing(0, 'auto', '1.25rem'),
    lineHeight: '1',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '700',
  },

}));

export default function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.fullList}>
      <Container maxWidth="md">
        <Divider className={classes.dragger} variant="middle" />
        <Typography className={classes.title} variant="h6" align="center">Contact Form</Typography>
        <Typography className={classes.subtitle} variant="body1" align="center" paragraph >
          Looking for someone to handle your next project? Or want to work together?
        </Typography>
        <FormControl className="classes.form" noValidate fullWidth autoComplete="off">
          <TextField className={classes.textField} id="name" margin="normal" label="Name" variant="outlined" autoComplete="off"/>
          <TextField className={classes.textField} id="email" type="email" margin="normal" label="Email" variant="outlined" />
          <TextField className={classes.textField} id="subject" margin="normal" label="Subject" variant="outlined" autoComplete="off"/>
          <TextField className={classes.textField} id="body" margin="normal" label="Message" variant="outlined" multiline rows={4} placeholder="Something nice 😸 ..."/>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
          >
            <Button 
              type="submit"
              color="default"
              size="small"
              disableElevation
              endIcon={<SendRoundedIcon>send</SendRoundedIcon>}
              style={{marginBottom: '.5rem', marginTop: '.5rem'}}
            >
              Send email
            </Button>
          </Grid>        
        </FormControl>
      </Container>
   
    
  </div>
  
  );
}