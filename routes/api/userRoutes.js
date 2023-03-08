const router = require('express').Router();

const {
    getUser, 
    getSingleUser, 
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

router
    .route('/')
    .get(getUser)
    .post(createUser);

router
    .route('/:id')
    .get(getSingleUser)
    .delete(deleteUser)
    .put(updateUser);

router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router; 