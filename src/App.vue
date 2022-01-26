<template>
  <div id="app">
    <Header></Header>
    <b-container class="mt-5">
      <b-row>
        <b-col cols="10">
          <h1>To-do</h1>
          <hr />
          <TodoList></TodoList>
        </b-col>
        <b-col cols="2">
          <ButtonCreateTask></ButtonCreateTask>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import Header from "@/components/templates/Header";
import ButtonCreateTask from "@/components/ButtonCreateTask";
export default {
  name: "App",
  components: {
    TodoList,
    Header,
    ButtonCreateTask,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
