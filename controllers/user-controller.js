const {User} = require('../models');

const userController = {
    getAllUser(req, res) {
        User.find({})
            // .populate({
            //     path: 'comments',
            //     select:'-__v'
            // })
            // .select('-__v')
            // .sort({_id:-1})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },
    // get one User by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            // .populate({
            //     path: 'comments',
            //     select: '-__v'
            // })
            // .select('-__v')
            .then(dbUserData => {
                console.log(dbUserData);
                // If no User is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // update User by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No User found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },
    // delete User
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No User found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },
    //Add friend
    addFriendUser({params}, res){ 
        User.findOneAndUpdate(
            { _id: params.id },
            { $push: { friends: params.friendid } },
            { new: true }
            )
            .then(dbUserData => {
                // If no User is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
        
    },
    deleteFriend({params}, res){
        User.findOneAndUpdate(
            { _id: params.id },
            { $pull: { friends: params.friendid } },
            { new: true }
            )
            .then(dbUserData => {
                // If no User is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
        

    }

};

module.exports = userController;