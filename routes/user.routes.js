const {Router} = require('express');

const {
    userGet, 
    userPut, 
    userPost, 
    userDelete, 
    userPath,
} = require('../controllers/user.controller')
    
const router = Router();

router.get('/', userGet);

router.put('/:id', userPut);

router.post('/', userPost);

router.patch('/', userPath);

router.delete('/', userDelete);

module.exports = router;