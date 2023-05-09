import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from '@mui/material';
//import {GetEndpoint} from './const/const';

const theme = createTheme();

export default function Login() {
  

    const navigate = useNavigate();
    const [showError, setShowError] = React.useState(false);
    
  const handleSubmit = (event) => {
    event.preventDefault();
    //nueo//nueo//nueo//nueo//nueo//nueo//nueo//nueo//nueo//nueo
    const data = new FormData(event.currentTarget);
    let payload={
       //nueo//nueo//nueo//nueo//nueo//nueo//nueo//nueo//nueo//nueo
      email: data.get('email'),
      password: data.get('password'),
    };
    //navigate("/" + data.get('email') + "/animal-crossing-cards")

    //nueo//nueo//nueo//nueo//nueo//nueo//nueo//nueo
    axios.post('/api/login', payload)
      .then((response)=>{
        navigate(`/${response.data.user}/animal-crossing-cards`);
      })
      .catch((error)=>{
        setShowError=true;
      });
    //nueo//nueo//nueo//nueo//nueo//nueo//nueo
  };
//Renderizado
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          {
            showError &&
              <Alert severity='error'> </Alert>
          }

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}