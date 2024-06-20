import React, { useEffect, useState } from 'react';
import { getAlbums, addAlbum, updateAlbum, deleteAlbum } from './services/albumService';
import AlbumForm from './components/AlbumForm';
import AlbumList from './components/AlbumList';

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [currentAlbum, setCurrentAlbum] = useState(null);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    const response = await getAlbums();
    setAlbums(response.data);
  };

  const handleSave = async (album) => {
    if (album.id) {
      await updateAlbum(album);
    } else {
      await addAlbum(album);
    }
    fetchAlbums();
    setCurrentAlbum(null);
  };

  const handleEdit = (album) => {
    setCurrentAlbum(album);
  };

  const handleDelete = async (id) => {
    await deleteAlbum(id);
    fetchAlbums();
  };

  return (
    <div>
      <h1>Albums Manager</h1>
      <AlbumForm onSave={handleSave} album={currentAlbum} />
      <AlbumList albums={albums} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
