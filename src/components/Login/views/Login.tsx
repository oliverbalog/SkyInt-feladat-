import Button from '@mui/material/Button';
import { Grid, Paper, TextField, Typography } from '@mui/material';
import './Login.css';
import { userStore } from '../../../stores/userStore';
import { login } from '../../../features/userSlice';
import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../../../http';
import { AxiosError, HttpStatusCode } from 'axios';
import { useAppDispatch } from '../../../hooks';
import { useDispatch } from 'react-redux';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [failedAttempt, setAttempt] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    /* userStore.dispatch(login(username)); */
    try {
      const res = await http.post('/login', { username, password });
      console.log(res);
      if (res.status === HttpStatusCode.Ok) {
        dispatch(login(username));
        navigate('/honeys');
      }
    } catch (e) {
      const ex = e as AxiosError;
      if (ex.response?.status ?? 403 === HttpStatusCode.Forbidden) {
        setAttempt(true);
      } else {
        alert('Egyéb hiba történt!');
      }
    }
    /* navigate("/"); */
  };

  return (
    <div className="form">
      <form onSubmit={(e: SyntheticEvent) => submitLogin(e)}>
        <Grid
          gap={4}
          alignItems="center"
          justifyContent="center"
          direction="row"
          container
          spacing={2}>
          <Grid container justifyContent="center" item xs={12}>
            <TextField
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
              label="Username"
              type="username"
            />
          </Grid>
          <Grid container justifyContent="center" item xs={12}>
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              label="Password"
              type="password"
            />
          </Grid>
          <Grid container justifyContent="center" item xs={12}>
            <Button type="submit" variant="contained">
              Login
            </Button>
          </Grid>
          {failedAttempt ? (
            <Grid container justifyContent="center" item xs={12}>
              <Typography color="red" variant="h5">
                Wrong username or password!
              </Typography>
            </Grid>
          ) : null}
        </Grid>
      </form>
    </div>
  );
}
