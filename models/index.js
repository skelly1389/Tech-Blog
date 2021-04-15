const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'postId',
});

Post.belongsTo(User, {
  foreignKey: 'userId',
});

User.hasMany(Comment, {
  foreignKey: 'commentId',
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
});

Post.hasMany(Comment, {
  foreignKey: 'commentId'
})

Comment.belongsTo(Post, {
  foreignKey: 'postId'
})

module.exports = { User, Post, Comment };
