import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getAlbums, addAlbum, updateAlbum, deleteAlbum } from './services/albumService';
import AlbumForm from './components/AlbumForm';
import AlbumList from './components/AlbumList';
import './App.css';

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [currentAlbum, setCurrentAlbum] = useState(null);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await getAlbums();
      setAlbums(response.data);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  const handleSave = async (album) => {
    try {
      let response;
      if (album.id) {
        response = await updateAlbum(album);
        setAlbums((prevAlbums) =>
          prevAlbums.map((item) => (item.id === album.id ? response.data : item))
        );
      } else {
        response = await addAlbum(album);
        setAlbums((prevAlbums) => [...prevAlbums, response.data]);
      }
      setCurrentAlbum(null);
    } catch (error) {
      console.error('Error saving album:', error);
    }
  };

  const handleEdit = (album) => {
    setCurrentAlbum(album);
  };

  const handleDelete = async (id) => {
    try {
      await deleteAlbum(id);
      setAlbums((prevAlbums) => prevAlbums.filter((album) => album.id !== id));
    } catch (error) {
      console.error('Error deleting album:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h1 className="text-center my-4">Albums Manager</h1>
          <AlbumForm onSave={handleSave} album={currentAlbum} />
          <AlbumList albums={albums} onEdit={handleEdit} onDelete={handleDelete} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
