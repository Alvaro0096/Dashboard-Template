import React from 'react';
import {Link} from 'react-router-dom';
import * as Icons from 'react-icons/fa';
import '../styles/Button.css';

const Button = () => {
  return (
    <>
      <Link to={'signup'}>
        <button className='btn'>
          <Icons.FaUserPlus />
          <span>Sing Up</span>
        </button>
      </Link>
    </>
  )
}

export default Button