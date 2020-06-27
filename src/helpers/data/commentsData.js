import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getComments = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/comments.json`)
    .then((response) => {
      const allComments = response.data;
      const comments = [];
      Object.keys(allComments).forEach((commentId) => {
        allComments[commentId].id = commentId;
        comments.push(allComments[commentId]);
      });
      resolve(comments);
    })
    .catch((err) => reject(err));
});

export default { getComments };
