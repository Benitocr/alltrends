const router = require('express').Router();
const { 
    addThought, 
    removeThought, 
    getAllThought,
    getThoughtById,
    // addReaction, 
    // removeReaction 
} = require('../../controllers/thought-controller');
//get all thought
router.route('/').get(getAllThought);

//get thought by id
router.route('/:thoughtId').get(getThoughtById)

// /api/comments/<UserId>
router.route('/:userId').post(addThought);

// /api/comments/<pizzaId>/<commentId>
router.route('/:userId/:thoughtId').delete(removeThought);

// router.route('/:pizzaId/:commentId').put(addReaction).delete(removeThought);

// router.route('/:pizzaId/:commentId/:replyId').delete(removeReaction);


module.exports = router;