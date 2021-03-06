const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriendUser,
    deleteFriend
  } = require('../../controllers/user-controller');

// Set up GET all and POST at /api/user
router.route('/').get(getAllUser).post(createUser);

// Set up GET one, PUT, and DELETE at /api/user/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);


//add friend 
router.route('/:id/friend/:friendid').post(addFriendUser).delete(deleteFriend);
module.exports = router;