import PropTypes from "prop-types";

const TYPES = {
  id: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  premium: PropTypes.bool.isRequired,
};

export default TYPES;
