import albumsData from './albumsData';
import userAlbumsData from './userAlbumsData';

const getAlbumsWithUserInfo = (uid) => new Promise((resolve, reject) => {
  albumsData.getAlbums()
    .then((albums) => {
      userAlbumsData.getAllUserAlbums(uid)
        .then((userAlbums) => {
          const finalAlbums = [];
          albums.forEach((album) => {
            const newAlbum = { ...album };
            const selectedUserAlbum = userAlbums.find((x) => x.albumId === album.id);
            if (selectedUserAlbum !== undefined) {
              newAlbum.haveListened = true;
              newAlbum.userAlbum = selectedUserAlbum;
              console.error(selectedUserAlbum);
            } else {
              newAlbum.haveListened = false;
              newAlbum.userAlbum = { likes: false };
            }
            finalAlbums.push(newAlbum);
          });
          resolve(finalAlbums);
        });
    })
    .catch((err) => reject(err));
});

export default { getAlbumsWithUserInfo };
