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

const getCommentsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/comments.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const allComments = response.data;
      const comments = [];
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

export default { getCommentsByAlbumId, getCommentsByUid };
