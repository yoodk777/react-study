import express from 'express';
import account from './account';

const router = express.Router();
router.us('/account', account);

export default router;
