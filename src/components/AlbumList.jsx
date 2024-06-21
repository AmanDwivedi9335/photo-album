import React from 'react';
import { ListGroup } from 'react-bootstrap';
import AlbumItem from './AlbumItem';

const AlbumList = ({ albums, onEdit, onDelete }) => {
  return (
    <ListGroup>
      {albums.map((album) => (
        <AlbumItem key={album.id} album={album} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ListGroup>
  );
};

export default AlbumList;
