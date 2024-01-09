import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = ({ phoneNumber }) => {
  const openWhatsAppChat = () => {
    const message = encodeURIComponent('Hello VITA');
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappLink;
  };

  return (
    <div
      className="fixed bottom-8 right-8 p-5 animate-bounce z-50 bg-green-500 text-white rounded-full cursor-pointer shadow-md hover:bg-green-600 transition duration-300"
      onClick={openWhatsAppChat}
    >
      <FaWhatsapp size={24} />
    </div>
  );
};

export default WhatsAppIcon;
