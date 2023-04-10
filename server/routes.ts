import { Router } from 'express';
import users from './users.js';
import type { Express } from 'express';

const router = (app: Express) => {
  app.post('/api/login', (req, res) => {
    console.log(users);
    const authenticated =
      users.filter((x) => x.username === req.body.username && x.password === req.body.password)
        .length > 0;
    res.status(authenticated ? 200 : 403);
    res.send(authenticated ? { authenticated: 'true' } : { error: 'unauthorized' });
  });
};

export default router;
