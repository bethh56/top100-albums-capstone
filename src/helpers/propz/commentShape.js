import PropTypes from 'prop-types';

const commentShape = PropTypes.shape({
  albumId: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { commentShape };
