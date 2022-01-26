<template>
  <div>
    <b-button v-b-modal.modal-task>Add Task</b-button>

    <b-modal
      id="modal-task"
      title="Add Task"
      @show="onReset"
      @hidden="onReset"
      @ok="createTask"
      :ok-disabled="checkRequiredField()"
    >
      <b-form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="Title:" label-for="title">
          <b-form-input
            id="title"
            v-model="task.title"
            type="text"
            placeholder="Enter a title"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Description:" label-for="textarea-body">
          <b-form-textarea
            id="textarea-body"
            v-model="task.body"
            size="sm"
            placeholder="Enter the task Description"
            required
          ></b-form-textarea>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

import { showError } from "@/config/global";

export default {
  name: "ButtonCreateTask",
  data() {
    return {
      task: {
        title: null,
        body: null,
      },
    };
  },
  methods: {
    createTask() {
      const payload = this.task;
      axios
        .post("todos", payload)
        .then((response) => {
          this.$store.commit("setTask", response.data);
          this.$toasted.global.defaultSuccess();
        })
        .catch(showError);
    },
    onReset() {
      this.task.title = null;
      this.task.body = null;
    },
    checkRequiredField() {
      return !(this.task.title || this.task.title === "");
    },
  },
};
</script>

<style>
</style>