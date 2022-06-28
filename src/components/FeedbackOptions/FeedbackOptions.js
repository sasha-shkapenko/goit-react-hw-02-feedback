import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onBtnClick }) {
    return options.map(option => {
        return (
            <button
                key={option}
                onClick={() => onBtnClick(option)}
            >
                {option}
            </button>
        )
    });
}
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onBtnClick: PropTypes.func.isRequired,
}