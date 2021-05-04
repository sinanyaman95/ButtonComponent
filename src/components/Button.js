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
        children
    } = props;

    return <div className={`saynn-button ${variant || ''} ${disableShadow && 'no-shadow'}`}> 
    {children} 
    </div>
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