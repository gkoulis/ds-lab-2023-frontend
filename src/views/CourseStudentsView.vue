<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useRemoteData } from '@/composables/useRemoteData.js';

const route = useRoute();

const courseIdRef = ref(null);
const urlRef = computed(() => {
  return 'http://localhost:9090/course/' + courseIdRef.value + '/students';
});
const authRef = ref(true);
const { data, loading, performRequest } = useRemoteData(urlRef, authRef);

onMounted(() => {
  courseIdRef.value = route.params.id;
  performRequest();
});
</script>

<template>
  <div>
    <table class="table">
      <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody v-if="data">
      <tr v-for="student in data._embedded.students" :key="student.id">
        <td>{{ student.firstName }}</td>
        <td>{{ student.lastName }}</td>
        <td>{{ student.email }}</td>
        <td>
          <RouterLink :to="{ name: 'student-details', params: { id: student.id } }">Display</RouterLink>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>