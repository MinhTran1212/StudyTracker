import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.send(`This will send all subjects back to users`);
});

router.post('/', (req, res) => {
    res.send(`This will create and send data`);
});

export default router;