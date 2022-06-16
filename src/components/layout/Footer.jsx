export const Footer = () => {
 const footerYear = new Date().getFullYear();
 return (
  <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
   <div className='container mx-auto'>
    <svg
     width='50'
     height='50'
     viewBox='0 0 24 24'
     xmlns='http://www.w3.org/2000/svg'
     fillRule='evenodd'
     clipRule='evenodd'
     className='inline-block fill-current '>
     <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.857 14.857c0 1.929-1.632 3.567-3.567 3.567-1.929 0-3.567-1.637-3.567-3.567 0-1.929 1.637-3.567 3.567-3.567 1.929 0 3.567 1.637 3.567 3.567zm-5.857-3.567c0 1.929-1.632 3.567-3.567 3.567-1.929 0-3.567-1.637-3.567-3.567 0-1.929 1.637-3.567 3.567-3.567 1.929 0 3.567 1.637 3.567 3.567zm-5.857-3.567c0 1.929-1.632 3.567-3.567 3.567-1.929 0-3.567-1.637-3.567-3.567 0-1.929 1.637-3.567 3.567-3.567 1.929 0 3.567 1.637 3.567 3.567z' />
    </svg>
    <p>Copyright &copy; {footerYear} All rights reserved.</p>
   </div>
  </footer>
 );
};
