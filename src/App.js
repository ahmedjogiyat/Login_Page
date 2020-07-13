import React  from 'react';
import NavBar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:'lightblue',
    marginTop: 50,
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  paper: {
    height:500,
    width:400,
    backgroundColor:"#f2f2ff",
    margin:'0 auto',
    textAlign: "center",
    marginTop:  "2%",
  }
}));
function App() {
  const classes = useStyles();

  
  return (
    <div>
       <NavBar/>
     
      <Paper elevation={3}  className ={classes.paper}> 
              <h1>LogIn</h1>
               <form className={classes.paper} noValidate autoComplete="off">
        <TextField  label="Enter Email" /> <br/><br/>
        <TextField  label="Enter Passsword" /> <br/><br/>
        <br/><br/>
        <Button variant="contained" color="secondary">
      Login
    </Button>

 
</form>
      </Paper>
           
     
    </div>
  );
}

export default App;
