import { useEffect, useRef } from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'

export function Cardslide() {
  const slideRef = useRef(null);

  useEffect(() => {
    const slideContainer = slideRef.current;

    let isDown = false;
    let startX;
    let scrollLeft;

    slideContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - slideContainer.offsetLeft;
      scrollLeft = slideContainer.scrollLeft;
      slideContainer.classList.add('scrolling');
    });

    slideContainer.addEventListener('mouseup', () => {
      isDown = false;
      slideContainer.classList.remove('scrolling');
    });

    slideContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slideContainer.offsetLeft;
      const walk = (x - startX) * 2;
      slideContainer.scrollLeft = scrollLeft - walk;
    });

    slideContainer.addEventListener('mouseleave', () => {
      isDown = false;
      slideContainer.classList.remove('scrolling');
    });
  }, []);

  return (
    <div className="cardslide" ref={slideRef}>
      <div className="cardtype white">
        <AiOutlineArrowRight className='rigthwhite'/>
       
        <p>carte d'electeur</p>
      </div>
      <div className="cardtype black">
      <AiOutlineArrowLeft className='rigthblack'/>
      <AiOutlineArrowRight className='rigthwhite'/>
        <p>carte de visite</p>
      </div>
      <div className="cardtype white">
      <AiOutlineArrowRight className='rigthwhite'/>
      <AiOutlineArrowLeft className='rigthblack'/>
        <p>carte d'étudiant</p>
      </div>
      <div className="cardtype black">
      <AiOutlineArrowLeft className='rigthblack'/>
      <AiOutlineArrowRight className='rigthwhite'/>
        <p>permis de conduire</p>
      </div>
      <div className="cardtype white">
      <AiOutlineArrowRight className='rigthwhite'/>
      <AiOutlineArrowLeft className='rigthblack'/>
        <p>carte d'identité</p>
      </div>
      <div className="cardtype black">
      <AiOutlineArrowLeft className='rigthblack'/>
      <AiOutlineArrowRight className='rigthwhite'/>
        <p>carte de service</p>
      </div>
      <div className="cardtype white">
      <AiOutlineArrowLeft className='rigthblack'/>
        <p>passport</p>
      </div>
    </div>
  );
}