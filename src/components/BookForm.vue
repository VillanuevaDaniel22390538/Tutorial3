<template>
  <form @submit.prevent="handleSubmit" class="book-form">
    <div class="form-group">
      <label for="title">Título *</label>
      <input type="text" id="title" v-model="form.title" required placeholder="Ej. Cien años de soledad" />
    </div>
    <div class="form-group">
      <label for="author">Autor *</label>
      <input type="text" id="author" v-model="form.author" required placeholder="Ej. Gabriel García Márquez" />
    </div>
    <div class="form-group">
      <label for="year">Año *</label>
      <input type="number" id="year" v-model="form.year" required placeholder="Ej. 1967" />
    </div>
    <div class="form-actions">
      <button type="submit" class="btn btn-primary">{{ isEdit ? 'Actualizar' : 'Crear' }}</button>
      <router-link to="/books" class="btn btn-danger">Cancelar</router-link>
    </div>
  </form>
</template>

<script setup>
import { reactive, defineProps, defineEmits } from 'vue';

const props = defineProps({
  initialData: {
    type: Object,
    default: () => ({ title: '', author: '', year: '' })
  },
  isEdit: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['submit']);

const form = reactive({ ...props.initialData });

const handleSubmit = () => {
  emit('submit', { ...form });
};
</script>

<style scoped>
.book-form {
  margin-top: 1rem;
}
.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}
.form-actions .btn {
  flex: 1;
  text-align: center;
}
</style>