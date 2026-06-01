<template>
  <div>
    <h1>Agregar Nuevo Libro</h1>
    <BookForm @submit="createBook" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import axios from 'axios';
import BookForm from '../components/BookForm.vue';

const router = useRouter();

const createBook = async (bookData) => {
  try {
    await axios.post('http://localhost:3001/books', bookData);
    router.push('/books');
  } catch (error) {
    console.error('Error al crear el libro:', error);
  }
};
</script>