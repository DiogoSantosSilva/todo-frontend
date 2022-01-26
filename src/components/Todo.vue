<template>
  <b-container>
    <b-row class="my-4">
      <b-col cols="10">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ task.title }}</h5>
          <small>{{ task.created_at }}</small>
        </div>
      </b-col>
      <b-col cols="2" class="align-self-center">
        <b-button variant="outline-danger" @click="removeTask(task)">
          <i class="fa fa-trash"></i>
        </b-button>
      </b-col>
    </b-row>
    <div v-if="task.body" class="accordion toggle my-2" role="tablist">
      <hr />
      <div
        block
        v-b-toggle="getTaskId"
        variant="info"
        @click="visible = !visible"
      >
        <i :class="[visible ? 'fa fa-arrow-down' : 'fa fa-arrow-up']"></i>
        Description
      </div>

      <b-collapse :id="getTaskId" accordion="my-accordion" role="tabpanel">
        <p class="toggle-body">
          {{ task.body }}
        </p>
      </b-collapse>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Todo",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    removeTask(task) {
      this.$store.commit("removeTask", task);
    },
  },
  computed: {
    getTaskId() {
      return `task-${this.task.id}`;
    },
  },
};
</script>

<style>
.toggle hr {
  border: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(120, 120, 120, 0),
    rgba(120, 120, 120, 0.75),
    rgba(120, 120, 120, 0)
  );
}
.toggle-body {
  padding: 10px;
  text-align: start;
}
</style>