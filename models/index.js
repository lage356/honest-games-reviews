const User = require('./User');
const Review = require('./Review');
const Comment = require('./Comment');

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE' 
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE' 
});

Comment.belongsTo(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE' 
});

module.exports = { User, Review, Comment};
