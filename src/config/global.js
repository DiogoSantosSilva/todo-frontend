import Vue from "vue";


export function showError(e) {
  if (e && e.response && e.response.data) {
    const key = Object.keys(e.response.data)[0];
    Vue.toasted.global.defaultError({ msg: `${key}: ${e.response.data[key]}` });
  } else if (typeof e === "string") {
    Vue.toasted.global.defaultError({ msg: e });
  } else {
    Vue.toasted.global.defaultError();
  }
}

export default { showError }