<template>
  <div class="books-view">
    <h1>Lista de Libros</h1>
    <router-link to="/books/create" class="btn btn-primary">Agregar Libro</router-link>

    <div v-if="isLoading">Cargando libros...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Año</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.id">
            <td>{{ book.id }}</td>
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.year }}</td>
            <td>
              <router-link :to="`/books/edit/${book.id}`" class="btn btn-edit">Editar</router-link>
              <button @click="deleteBook(book.id)" class="btn btn-delete">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const books = ref([]);
const isLoading = ref(true);
const error = ref(null);

const fetchBooks = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await axios.get('http://localhost:3001/books');
    books.value = response.data;
  } catch (err) {
    error.value = 'No se pudieron cargar los libros.';
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};

const deleteBook = async (id) => {
  if (confirm('¿Eliminar este libro?')) {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      books.value = books.value.filter(book => book.id !== id);
    } catch (err) {
      console.error('Error al eliminar el libro:', err);
    }
  }
};

onMounted(() => {
  fetchBooks();
});
</script>

<style scoped>
.books-view {
  max-width: 800px;
  margin: 0 auto;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
.btn {
  padding: 5px 10px;
  margin: 0 5px;
  text-decoration: none;
  border-radius: 4px;
  display: inline-block;
  border: none;
  cursor: pointer;
}
.btn-primary {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
}
.btn-edit {
  background-color: #2196F3;
  color: white;
}
.btn-delete {
  background-color: #f44336;
  color: white;
}
.error {
  color: red;
  margin-top: 20px;
}
</style>