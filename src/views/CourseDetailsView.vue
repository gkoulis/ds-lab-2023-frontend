<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useRemoteData } from '@/composables/useRemoteData.js';
const backendEnvVar = import.meta.env.VITE_BACKEND;

const router = useRouter();
const route = useRoute();

const courseIdRef = ref(null);
const urlRef = computed(() => {
    return backendEnvVar + '/api/course/' + courseIdRef.value;
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
                    <th>ID</th>
                    <td>{{ data.id }}</td>
                </tr>
                <tr>
                    <th>Title</th>
                    <td>{{ data.title }}</td>
                </tr>
                <tr>
                    <th>Semester</th>
                    <td>{{ data.semester }}</td>
                </tr>
            </tbody>
        </table>
        <pre>{{ data }}</pre>
    </div>
</template>
