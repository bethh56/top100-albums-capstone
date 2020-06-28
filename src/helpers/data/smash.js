import commentsData from './commentsData';
import albumsData from './albumsData';

const getCommentByUidAndAlbumId = (commentId) => new Promise((resolve, reject) => {
  commentsData.getCommentsByAlbumId(commentId)
    .then((response) => {
      const comment = response.data;
      comment.id = commentId;
      comment.album = [];
      console.error(comment.id);
      console.error(comment.album);
      commentsData.getCommentsByUid(comment.uid).then((albumComments) => {
        albumsData.getAlbums().then((allAlbums) => {
          albumComments.forEach((albumComment) => {
            const album = allAlbums.find((x) => x.id === albumComment.albumId);
            comment.album.push(album);
          });
          resolve(comment);
        });
      });
    });
});

export default { getCommentByUidAndAlbumId };
