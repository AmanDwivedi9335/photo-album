import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/albums';

export const getAlbums = () => axios.get(API_URL);

export const addAlbum = (album) => axios.post(API_URL, album);

export const updateAlbum = (album) => axios.put(`${API_URL}/${album.id}`, album);

export const deleteAlbum = (id) => axios.delete(`${API_URL}/${id}`);
