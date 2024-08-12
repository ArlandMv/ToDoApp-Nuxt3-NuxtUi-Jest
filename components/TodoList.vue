<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id" class="flex items-center mb-2">
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="toggleTodo(todo)"
        class="mr-2"
      />
      
      <span :class="{ 'line-through': todo.completed }">
        {{ todo.description }}
      </span>

      <UButton
        icon="i-heroicons-trash"
        label="Delete"
        color="red"
        class="ml-auto"
        trailing
        type="submit"
        @click="$emit('delete-todo', todo.id)"
      />
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(["todos"]);
const emit = defineEmits(["update-todo", "delete-todo"]);

const toggleTodo = (todo) => {
  emit("update-todo", { ...todo, completed: !todo.completed });
};
</script>
