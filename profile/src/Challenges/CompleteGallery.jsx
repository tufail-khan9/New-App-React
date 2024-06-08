import { useState } from 'react';
// import { sculptureList } from './data.js';

export default function Gallery() {
    const sculptureList = [{
        name: 'Homenaje a la Neurocirugía',
        artist: 'Marta Colvin Andrade',
        description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
        url: 'https://i.imgur.com/Mx7dA2Y.jpg',
        alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'  
      }, {
        name: 'Floralis Genérica',
        artist: 'Eduardo Catalano',
        description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
        url: 'https://i.imgur.com/ZF6s192m.jpg',
        alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
      }, {
        name: 'Eternal Presence',
        artist: 'John Woodrow Wilson',
        description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
        url: 'https://i.imgur.com/aTtVpES.jpg',
        alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
      }, {
        name: 'Moai',
        artist: 'Unknown Artist',
        description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
        url: 'https://i.imgur.com/RCwLEoQm.jpg',
        alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
       
      }]; 
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }
   
  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function handleNextClick() {
    if (index + 1 >= sculptureList.length) {
        // setIndex(0);
       next = disabled
      } else {
        setIndex(index + 1);
      }
  }

  function backward(){
     if (index - 1 <= sculptureList[0]){
    //    setIndex(sculptureList.length);
    privious = disabled;
    }else{setIndex(index - 1);}
  }


  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
    <button disabled={!hasPrev} onClick={backward}>Privious</button>
      <button disabled={!hasNext} onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}
