import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const AlbumItem = ({ album, onEdit, onDelete }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>{album.title}</div>
      <div>
        <Button variant="primary" size="sm" onClick={() => onEdit(album)} className="mr-2">
          Edit
        </Button>
        <Button variant="danger" size="sm" onClick={() => onDelete(album.id)}>
          Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default AlbumItem;
