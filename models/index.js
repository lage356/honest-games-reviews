const User = require('./User');
const Review = require('./Review');
const Comment = require('./Comment');

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE' 
});

Comment.belongsTo(User, {
    foreignKey: 'review_id',
    onDelete: 'CASCADE' 
});

Review.hasMany(Comment,{
    foreignKey:'review_id',
    onDelete:'CASCADE'
});


//* PROBAR EN MODELO
// Review.hasMany(Comment,{
//     foreignKey:'review_id',
//     onDelete:'CASCADE'
// })

module.exports = { User, Review, Comment};
