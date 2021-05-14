import PropTypes from 'prop-types';
import '../assets/button.css';
import { useState, useEffect } from 'react'
import {
    MdGrade,
    MdHelp,
    MdHelpOutline,
    MdHome
} from 'react-icons/md'

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

    const [start, setStart] = useState(null)
    const [end, setEnd] = useState(null)

    useEffect(() => {
        if (startIcon) {
            let start = null
            switch (startIcon) {
                case 'star':
                    start = <MdGrade size={28} />
                    break;
                case 'home':
                    start = <MdHome size={28} />
                    break;
                case 'help':
                    start = <MdHelp size={28} />
                    break;
                case 'help outline':
                    start = <MdHelpOutline size={28}/>
                    break;
                default:
                    start = null
            }
            if(start) setStart(start)
        }
    }, [startIcon])

    useEffect(() => {
        if (endIcon) {
            let end = null
            switch (endIcon) {
                case 'star':
                    end = <MdGrade size={30} />
                    break;
                case 'home':
                    end = <MdHome size={30} />
                    break;
                case 'help':
                    end = <MdHelp size={30} />
                    break;
                case 'help outline':
                    end = <MdHelpOutline size={30}/>
                    break;
                default:
                    end = null
            }
            if(end) setEnd(end)
        }
    }, [endIcon])

    return (
        <div
            className={`saynn-button ${variant || ''} ${disableShadow && 'no-shadow'} ${size} ${color} ${disabled && 'disabled'}`}>
            {startIcon && start}
            <p onClick={disabled ? null : onClick}>{children}</p>
            {endIcon && end}
        </div>
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