import { useState, useEffect } from 'react';
import './style.css';
import { Joke } from '../../components/Joke/index.jsx';

export const HomePage = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleLike = () => {
    setLike(like + 1);
  };

  const handleDisLike = () => {
    setDislike(dislike + 1);
  };
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const data = await response.json();
      setJoke(data.data);
    };

    fetchJokes();
  }, []);

  return (
    <div className="container">
      {joke.map((vtip) => (
        <Joke
          key={vtip.id}
          userAvatar={vtip.avatar}
          userName={vtip.name}
          text={vtip.text}
          like={like}
          dislike={dislike}
          onLike={handleLike}
          onDisLike={handleDisLike}
        />
      ))}
    </div>
  );
};
