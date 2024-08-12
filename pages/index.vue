<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Todo App</h1>
    <!--TodoForm @add-todo="addTodo" :disabled="isLoading" /-->
    <UCard>
      <TodoList
        :todos="todos"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
      />

      <div v-if="error" class="text-center py-4">
        <p class="text-red-500">Fetch Failed: {{ error.message }}</p>
      </div>

      <div v-if="isLoading" class="text-center py-4">
        <p class="text-gray-500">Loading todos...</p>
      </div>
    </UCard>
  </div>
</template>

<script setup>
//const { todos, isLoading, error, fetchTodos, addTodo, updateTodo, deleteTodo } = useTodos()

const todos = ref([]);
const isLoading = ref(true);
const error = ref(null);
const fetchTodos = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const data = await $fetch("http://localhost:8000/api/todos");
    todos.value = data;
    console.log(data.value);
  } catch (err) {
    error.value = err;
    console.error("Error fetching todos:", err);
  } finally {
    isLoading.value = false;
  }
};

/*
const fetchTodos = async () => {
  const { data, error } = await useFetch("http://localhost:8000/api/todos");
  todos.value = data.value;
};
*/

const addTodo = async (newTodo) => {
  try {
    await $fetch("http://localhost:8000/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    await fetchTodos();
  } catch (err) {
    console.error(err);
  }
};

const updateTodo = async (updatedTodo) => {
  await useFetch(`http://localhost:8000/api/todos/${updatedTodo.id}`, {
    method: "PUT",
    body: updatedTodo,
  });
  await fetchTodos();
};

const deleteTodo = async (id) => {
  await $fetch(`http://localhost:8000/api/todos/${id}`, {
    method: "DELETE",
  });
  await fetchTodos();
};

onMounted(fetchTodos);
const toggleTodo = (todo) => {
  updateTodo(todo.id, { completed: !todo.completed });
};
</script>
