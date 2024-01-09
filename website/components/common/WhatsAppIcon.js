import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const WhatsAppIcon = ({ phoneNumber , message}) => {
  return (
    <Link href ={`https://wa.me/${phoneNumber}?text=${message ?? ''}`} passHref legacyBehavior><a className='fixed bottom-8 right-8 p-5 animate-bounce z-50 bg-green-500 text-white rounded-full cursor-pointer shadow-md hover:bg-green-600 transition duration-300' target='_new'><FaWhatsapp size={24} /></a></Link>
  );
};

export default WhatsAppIcon;
