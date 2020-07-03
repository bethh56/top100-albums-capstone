import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllUserAlbums = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/userAlbums.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allUserAlbums = result.data;
      const userAlbums = [];
      if (allUserAlbums !== null) {
        Object.keys(allUserAlbums).forEach((userAlbumId) => {
          const newUserAlbum = allUserAlbums[userAlbumId];
          newUserAlbum.id = userAlbumId;
          userAlbums.push(newUserAlbum);
        });
      }
      resolve(userAlbums);
    })
    .catch((err) => reject(err));
});

const saveListenedAlbum = (newListen) => axios.post(`${baseUrl}/userAlbums.json`, newListen);

const deleteListenedAlbum = (userAlbumId) => axios.delete(`${baseUrl}/userAlbums/${userAlbumId}.json`);

const updatedLikeOnUserAlbum = (userAlbumId, like) => axios.put(`${baseUrl}/userAlbums/${userAlbumId}.json`, like);

export default {
  saveListenedAlbum,
  getAllUserAlbums,
  deleteListenedAlbum,
  updatedLikeOnUserAlbum,
};
