<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useRemoteData } from '@/composables/useRemoteData.js';

const router = useRouter();
const route = useRoute();

const studentIdRef = ref(null);
const urlRef = computed(() => {
    return 'http://localhost:9090/student/' + studentIdRef.value + '/courses';
});
const authRef = ref(true);
const { data, loading, performRequest } = useRemoteData(urlRef, authRef);

onMounted(() => {
    studentIdRef.value = route.params.id;
    performRequest();
});
</script>

<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <!-- <th>Course ID</th> -->
                    <th>Course Title</th>
                </tr>
            </thead>
            <tbody v-if="loading">
                <tr>
                    <td colspan="1">Loading...</td>
                </tr>
            </tbody>
            <tbody v-if="data">
                <tr v-for="course in data._embedded.courses">
                    <!-- <th>{{ course.id }}</th> -->
                    <td>{{ course.title }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
