<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useRemoteData } from '@/composables/useRemoteData.js';

const router = useRouter();
const route = useRoute();

const courseIdRef = ref(null);
const urlRef = computed(() => {
  return 'http://localhost:9090/course/' + courseIdRef.value;
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
      <tbody v-if="data">
      <tr>
        <th>Title</th>
        <td>{{ data.title }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>