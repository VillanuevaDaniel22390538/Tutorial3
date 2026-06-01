<template>
  <div>
    <h1>Editar Libro</h1>
    <div v-if="isLoading">Cargando...</div>
    <div v-else-if="error">{{ error }}</div>
    <BookForm v-else :initialData="book" :isEdit="true" @submit="updateBook" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import BookForm from '../components/BookForm.vue';

const route = useRoute();
const router = useRouter();
const book = ref({ title: '', author: '', year: '' });
const isLoading = ref(true);
const error = ref(null);
const bookId = route.params.id;

const fetchBook = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await axios.get(`http://localhost:3001/books/${bookId}`);
    book.value = response.data;
  } catch (err) {
    error.value = 'No se pudo cargar el libro.';
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};

const updateBook = async (bookData) => {
  try {
    await axios.put(`http://localhost:3001/books/${bookId}`, bookData);
    router.push('/books');
  } catch (err) {
    console.error('Error al actualizar el libro:', err);
  }
};

onMounted(() => {
  fetchBook();
});
</script>