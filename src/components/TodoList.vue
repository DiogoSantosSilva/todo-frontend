<template>
  <div>
    <b-list-group v-if="todos.length > 0" class="mb-4">
      <b-list-group-item v-for="task in todos" :key="task.id">
        <Todo :task="task"></Todo>
      </b-list-group-item>
    </b-list-group>
    <h1 v-else>There is no tasks</h1>
  </div>
</template>

<script>
import Todo from "@/components/Todo";
import { mapState, mapActions } from "vuex";
export default {
  name: "TodoList",
  components: {
    Todo,
  },
  computed: {
    ...mapState(["todos"]),
  },
  async created() {
    await this.loadTodoList();
  },
  methods: {
    ...mapActions(["loadTodoList"]),
  },
};
</script>

<style>
</style>