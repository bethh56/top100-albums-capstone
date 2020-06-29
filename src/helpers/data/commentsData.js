import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getCommentsByAlbumId = (albumId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/comments.json?orderBy="albumId"&equalTo="${albumId}"`)
    .then((result) => {
      const allComments = result.data;
      const comments = [];
      console.error(allComments);
      if (allComments !== null) {
        Object.keys(allComments).forEach((commentId) => {
          allComments[commentId].id = commentId;
          comments.push(allComments[commentId]);
        });
      }
      resolve(comments);
    })
    .catch((error) => reject(error));
});

const saveComment = (newComment) => axios.post(`${baseUrl}/comments.json`, newComment);

export default { getCommentsByAlbumId, saveComment };
