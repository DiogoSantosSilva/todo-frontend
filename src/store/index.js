import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex)

import { showError } from "@/config/global";

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    setTask(state, task) {
      state.todos.push(task)
    },
    setTaskList(state, tasks) {
      state.todos = tasks
    },
    removeTask(state, task) {
      const path = `todos/${task.id}`
      axios.delete(path)
        .then(() => {
          state.todos.splice(state.todos.indexOf(task), 1)
        })
        .catch(showError)
    }
  },
  actions: {
    loadTodoList({ commit }) {
      axios.get("todos")
        .then((response) => {
          commit("setTaskList", response.data)
        })
        .catch(showError);
    },
  },
  modules: {}
})