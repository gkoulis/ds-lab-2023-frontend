<script setup>
import { ref } from "vue";
import { useRemoteData } from "@/composables/useRemoteData.js";

const formDataRef = ref({
  "firstName": "",
  "lastName": "",
  "email": ""
});
const urlRef = ref("http://localhost:9090/student");
const authRef = ref(true);
const methodRef = ref("POST");

const { data, performRequest } = useRemoteData(urlRef, authRef, methodRef, formDataRef);

const onSubmit = () => {
  performRequest();
};
</script>

<template>
  <div class="container mb-4">
    <h1>New Student</h1>
  </div>
  <div>
    <pre>{{ data }}</pre>
  </div>
  <div class="container mb-4">
    <div class="mb-2">
      <label for="firstName">First Name</label>
      <input class="form-control" id="firstName" v-model="formDataRef.firstName" type="text" />
    </div>
    <div class="mb-2">
      <label for="lastName">Last Name</label>
      <input class="form-control" id="lastName" v-model="formDataRef.lastName" type="text" />
    </div>
    <div class="mb-2">
      <label for="email">Email</label>
      <input class="form-control" id="email" v-model="formDataRef.email" type="email" />
    </div>
    <div class="">
      <button class="btn btn-primary" @click="onSubmit" type="button">Create new student</button>
    </div>
  </div>
</template>