<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="title">Título:</label>
      <input type="text" id="title" v-model="form.title" required />
    </div>
    <div class="form-group">
      <label for="author">Autor:</label>
      <input type="text" id="author" v-model="form.author" required />
    </div>
    <div class="form-group">
      <label for="year">Año:</label>
      <input type="number" id="year" v-model="form.year" required />
    </div>
    <button type="submit" class="btn-submit">{{ isEdit ? 'Actualizar' : 'Crear' }}</button>
    <router-link to="/books" class="btn-cancel">Cancelar</router-link>
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
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.btn-submit, .btn-cancel {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  text-decoration: none;
  display: inline-block;
}
.btn-submit {
  background-color: #4CAF50;
  color: white;
}
.btn-cancel {
  background-color: #f44336;
  color: white;
}
</style>