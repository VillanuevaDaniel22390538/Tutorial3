<template>
  <div class="form-container">
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

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}
</style>