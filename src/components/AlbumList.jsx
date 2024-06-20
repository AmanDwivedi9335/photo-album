import React from 'react';
import AlbumItem from './AlbumItem';

const AlbumList = ({ albums, onEdit, onDelete }) => {
  return (
    <div>
      {albums.map((album) => (
        <AlbumItem key={album.id} album={album} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default AlbumList;
