<template>
  <UCard class="my-2">
    <form @submit.prevent="submitTodo" class="mx-auto">
      <UButtonGroup size="md" orientation="horizontal" >
        <UInput
          v-model="newTodo"
          placeholder="Add a new todo"
          class="flex-grow"
        />
        <UButton
          icon="i-heroicons-plus"
          label="Add Todo"
          color="primary"
          trailing
          type="submit"
          class="ml-auto"
        />
      </UButtonGroup>
    </form>
  </UCard>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["add-todo"]);
const newTodo = ref("");

const submitTodo = () => {
  if (newTodo.value.trim()) {
    emit("add-todo", { description: newTodo.value.trim(), completed: false });
    newTodo.value = "";
  }
};
</script>
