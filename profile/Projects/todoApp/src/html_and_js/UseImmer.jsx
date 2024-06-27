import { useImmer } from 'use-immer';

export default function UseImmer() {
  const [person, updatePerson] = useImmer({
    name: 'muhammad tufail',
    artwork: {
      title: 'khan G',
      address: 'lakki marwat',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    updatePerson(item => {
        item.name = e.target.value;
    });
  }

  function handleTitleChange(e) {
    updatePerson(item => {
        item.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e) {
    updatePerson(item => {
        item.artwork.address = e.target.value;
    });
  }

  function handleImageChange(e) {
    updatePerson(item => {
        item.artwork.image = e.target.value;
    });
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.address}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.address})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  );
}