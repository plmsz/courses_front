import PropTypes from 'prop-types';

function Input({ placeholder, size = 'md', handleChange }) {
    let scale = 1;
    if (size === 'sm') scale = 0.75;
    if (size === 'lg') scale = 1.5;

    const style = {
        fontFamily: 'Roboto, sans-serif',
        outline: 0,
        background: '#f2f2f2',
        width: `${scale * 50}%`,
        padding: `${scale * 10}px`,
        border: 0,
        borderRadius: '5px',
        margin: '0 0 15px',
        boxSizing: 'border-box',
        fontSize: '14px',
    };

    return (
        <input onChange={handleChange} style={style} placeholder={placeholder} />
    );
}

Input.propTypes = {
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    handleChange: PropTypes.func,
};

export default Input;