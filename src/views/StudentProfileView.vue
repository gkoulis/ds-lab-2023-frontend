<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useRemoteDataGET } from '@/composables/useRemoteDataGET.js';

const router = useRouter();
const route = useRoute();

const studentIdRef = ref(null);
const urlRef = computed(() => {
  return 'http://localhost:9090/student/' + studentIdRef.value + "/profile";
});
const authRef = ref(true);
const { data, loading, loadData } = useRemoteDataGET(urlRef, authRef);

onMounted(() => {
  studentIdRef.value = route.params.id;
  loadData();
});
</script>

<template>
  <pre>{{ data }}</pre>
</template>
