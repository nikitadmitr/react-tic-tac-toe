import PropTypes from 'prop-types';

Square.propTypes = {
   value: PropTypes.string,
   onSquareClick: PropTypes.func,
};

export default function Square({ value, onSquareClick }) {
   return (
      <button onClick={onSquareClick} className="square">
         {value}
      </button>
   );
}
