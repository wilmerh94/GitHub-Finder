import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/AlertContext';

export const Alert = () => {
 const { alert } = useContext(AlertContext);

 return (
  alert !== null && (
   <p className='flex items-start-mb-4 space-x-2'>
    {alert.type === 'error' && (
     <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
      <path
       fillRule='evenodd'
       d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
       clipRule='evenodd'
      />
     </svg>
    )}
    <p className='flex-1 text-base font-semibold leading-7 text-white'>
     <strong>{alert.msg}</strong>
    </p>
   </p>
  )
 );
};
