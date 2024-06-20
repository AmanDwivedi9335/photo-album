import React from 'react';

const AlbumItem = ({ album, onEdit, onDelete }) => {
  return (
    <div>
      <h3>{album.title}</h3>
      <button onClick={() => onEdit(album)}>Edit</button>
      <button onClick={() => onDelete(album.id)}>Delete</button>
    </div>
  );
};

export default AlbumItem;
