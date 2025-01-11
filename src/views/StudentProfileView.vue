<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useRemoteData } from '@/composables/useRemoteData.js';

const router = useRouter();
const route = useRoute();

const studentIdRef = ref(null);
const urlRef = computed(() => {
    return +'/student/' + studentIdRef.value + '/profile';
});
const authRef = ref(true);
const { data, loading, performRequest } = useRemoteData(urlRef, authRef);

onMounted(() => {
    studentIdRef.value = route.params.id;
    performRequest();
});
</script>

<template>
    <pre>{{ data }}</pre>
</template>
