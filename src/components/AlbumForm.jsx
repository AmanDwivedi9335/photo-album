import React, { useState, useEffect } from 'react';

const AlbumForm = ({ onSave, album }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (album) {
      setTitle(album.title);
    }
  }, [album]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...album, title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Album Title"
        required
      />
      <button type="submit">{album ? 'Update' : 'Add'} Album</button>
    </form>
  );
};

export default AlbumForm;
