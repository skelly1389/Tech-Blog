const { Comment } = require('../models');

const commentdata = [
  {
    commentText: "This sure is a pretty swell blog post!",
    userId: 2,
    postId: 1
  },
  {
    commentText: "I like your blog posts as well!",
    userId: 1,
    postId: 2
  },
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
