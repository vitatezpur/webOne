import React from 'react';
import Link from 'next/link';

const Contactus = () => {
  return (
    <Link href ="/contact" passHref legacyBehavior><a className="w-40 h-12 flex bg-purple-600 text-white rounded-md border-none cursor-pointer justify-center align-middle pt-3">Contact us</a></Link>
  );
};

export default Contactus;
