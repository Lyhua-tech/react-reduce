import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';


const Button = ({ 
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  ...rest
 }) => {
  const classname = classnames(rest.className, 'px-3 py-1.5 border flex items-center  ', {
    'border-blue-500 bg-blue-600 text-white' : primary,
    'border-gray-500 bg-gray-600 text-white' : secondary,  
    'border-green-500 bg-green-600 text-white' : success,  
    'border-yellow-500 bg-yellow-600 text-white' : warning,  
    'border-red-500 bg-red-600 text-white' : danger,  
    'rounded-full' : rounded,
    'bg-white': outline,
    'bg-white text-blue-600': outline && primary,
    'bg-white text-gray-600': outline && secondary,
    'bg-white text-green-600': outline && success,
    'bg-white text-yellow-600': outline && warning,
    'bg-white text-red-600': outline && danger,
  }
  )
  return (
    <button className={classname} {...rest}>
        {children}
    </button>
  )
}

Button.propTypes = {
  checkValue : ({ primary, secondary, success, warning, danger }) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);

    if (count > 1) {
      return new Error('only can apply one color choice.');
    }
  }
}

export default Button