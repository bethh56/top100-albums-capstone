import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAlbums = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/albums.json`)
    .then((response) => {
      const allAlbums = response.data;
      const albums = [];
      Object.keys(allAlbums).forEach((albumId) => {
        allAlbums[albumId].id = albumId;
        albums.push(allAlbums[albumId]);
      });
      resolve(albums);
    })
    .catch((err) => reject(err));
});

const getSingleAlbum = (albumId) => axios.get(`${baseUrl}/albums/${albumId}.json`);

export default { getAlbums, getSingleAlbum };
