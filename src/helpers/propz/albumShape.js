import PropTypes from 'prop-types';

const albumShape = PropTypes.shape({
  albumImage: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  bandName: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.string.isRequired,
});

export default { albumShape };
