<template>
  <div class="books-view">
    <div class="header-actions">
      <h1>Lista de Libros</h1>
      <router-link to="/books/create" class="btn btn-success">+ Agregar Libro</router-link>
    </div>

    <div v-if="isLoading" class="loading-card">⏳ Cargando libros...</div>
    <div v-else-if="error" class="error-card">❌ {{ error }}</div>
    <div v-else>
      <div class="table-responsive">
        <table>
          <thead>
            <tr><th>ID</th><th>Título</th><th>Autor</th><th>Año</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            <tr v-for="book in books" :key="book.id">
              <td>{{ book.id }}</td>
              <td>{{ book.title }}</td>
              <td>{{ book.author }}</td>
              <td>{{ book.year }}</td>
              <td>
                <router-link :to="`/books/edit/${book.id}`" class="btn btn-warning"> Editar</router-link>
                <button @click="deleteBook(book.id)" class="btn btn-danger"> Eliminar</button>
               </td>
            </tr>
          </tbody>
        </table>
      </div>
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
  max-width: 100%;
}
.header-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
@media (max-width: 600px) {
  .header-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  .header-actions .btn {
    text-align: center;
  }
}
</style>