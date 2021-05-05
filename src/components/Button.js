import PropTypes from 'prop-types';
import '../assets/button.css';


export const Button = props => {

    const {
        variant,
        disableShadow,
        disabled,
        startIcon,
        endIcon,
        size,
        color,
        onClick,
        children
    } = props;

    return (
        <button
            className={`saynn-button ${variant || ''} ${disableShadow && 'no-shadow'} ${size} ${color} ${disabled && 'disabled'}`}
            onClick={onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    variant: PropTypes.string,
    disableShadow: PropTypes.bool,
    disabled: PropTypes.bool,
    startIcon: PropTypes.string,
    endIcon: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
}