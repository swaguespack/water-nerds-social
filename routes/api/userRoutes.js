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

// api/users/GET ALL and POST
router
    .route('/')
    .get(getUser)
    .post(createUser);

// api/user/:userId GET one user, PUT, and DELETE by user id
router
    .route('/:userId')
    .get(getSingleUser)
    .delete(deleteUser)
    .put(updateUser);

// api/users/:userId/friends/:friendId POST and DELETE by friend id
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router; 