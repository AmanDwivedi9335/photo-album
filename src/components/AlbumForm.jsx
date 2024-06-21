import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

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
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group controlId="albumTitle">
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Album Title"
          required
        />
      </Form.Group>
      <Button variant="success" type="submit">
        {album ? 'Update' : 'Add'} Album
      </Button>
    </Form>
  );
};

export default AlbumForm;
