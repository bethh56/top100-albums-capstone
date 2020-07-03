import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getCommentsByAlbumId = (albumId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/comments.json?orderBy="albumId"&equalTo="${albumId}"`)
    .then((result) => {
      const allComments = result.data;
      const comments = [];
      if (allComments !== null) {
        Object.keys(allComments).forEach((commentId) => {
          allComments[commentId].id = commentId;
        });
      }
      console.error('resolve', comments);
    })
    .catch((error) => reject(error));
});

const saveComment = (newComment) => axios.post(`${baseUrl}/comments.json`, newComment);

const deleteComment = (commentId) => axios.delete(`${baseUrl}/comments/${commentId}.json`);

export default { getCommentsByAlbumId, saveComment, deleteComment };
