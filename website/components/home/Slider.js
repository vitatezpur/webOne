import{useEffect} from "react";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/assets/owl.carousel.css';

function Slider({AOS}) {
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
        ssr: false,
      });
      
    useEffect(() => {
        AOS.init({
            disable: 'mobile'
        });
        AOS.refresh();
      }, [AOS]);
    
      const responsive={
        0:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 1
        }}
    
    
  return (
    <OwlCarousel
    responsive={responsive}
    loop={true}
    responsiveClass={true}
    nav={true}
    navText={['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>']}
    dots={true}
  >

  </OwlCarousel>
  )
}

export default Slider