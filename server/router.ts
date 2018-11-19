import { Router } from 'express';

import { oktaRouter } from './oktaRouter';
import { auth0Router } from './auth0Router';

// creates an express router instance
export const router: Router = Router();

router.use('/okta', oktaRouter);

router.use('/auth0', auth0Router)
