<template>
  <div class="home">
    <h1>Inventario de Libros</h1>
    <p><strong>Alumno:</strong> Daniel Donaldo Villanueva Canul</p>
    <p><strong>No. Control:</strong> 22390538</p>
    <p><strong>Institución:</strong> Instituto Tecnológico de Chetumal</p>
    <router-link to="/books" class="btn btn-primary">Ver Inventario</router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}
.home h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.home p {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #555;
}
.home .btn {
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}
</style>