import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('all is OK')
})

export default router