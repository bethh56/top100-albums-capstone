import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getUserAlbumsByUid = (uid) => new Promise((resolve, reject) => {
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

const haveListenedToAlbum = (albumId, updateListen) => axios.put(`${baseUrl}/userAlbums/${albumId}.json`, updateListen);

export default { haveListenedToAlbum, getUserAlbumsByUid };
