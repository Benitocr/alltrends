const router = require('express').Router();
const { 
    addThought, 
    removeThought, 
    getAllThought,
    getThoughtById,
    addReaction,
    removeReaction 
} = require('../../controllers/thought-controller');
//get all thought
router.route('/').get(getAllThought);

//get thought by id
router.route('/:thoughtId').get(getThoughtById);
router.route('/:thoughtId/reaction').post(addReaction);
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

// /api/comments/<UserId>
router.route('/:userId').post(addThought);

// /api/comments/<userId>/<commentId>
router.route('/:userId/:thoughtId').delete(removeThought);





module.exports = router;