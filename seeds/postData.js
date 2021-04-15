const { Post } = require('../models');

const postdata = [
  {
    postTitle: 'Test Post 1',
    postText: 'If I were to write a blog post, the text for it would go here!',
    userId: 1
  },
  {
    postTitle: 'Test Post 2',
    postText: 'I am a second user making a blog post!',
    userId: 2
  }

]
  

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;