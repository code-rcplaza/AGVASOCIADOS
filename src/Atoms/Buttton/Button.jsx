import PropTypes from 'prop-types'
import classNames from 'classnames'
import './button.css'

const Button = ({
    type = 'primary',
    disabled = false,
    children,
    size = 'xl',
    onClick,
}) => (
    <button
        type='button'
        className={classNames('btn', {
            [`btn-${type}`]: type && !disabled,
            [`btn-${size}`]: size,
            [`btn-disabled`]: disabled,
        })}
        disabled={disabled}
        onClick={onClick}
    >
        {children}
    </button>
)
Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['secondary', 'tertiary']),
    size: PropTypes.oneOf(['sm', 'md', 'xl', 'full']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
}

export default Button
