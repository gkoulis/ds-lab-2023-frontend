<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useRemoteDataGET } from '@/composables/useRemoteDataGET.js';

const router = useRouter();
const route = useRoute();

const studentIdRef = ref(null);
const urlRef = computed(() => {
    return '/api/student/' + studentIdRef.value;
});
const authRef = ref(true);
const { data, loading, loadData } = useRemoteDataGET(urlRef, authRef);

onMounted(() => {
    studentIdRef.value = route.params.id;
    loadData();
});
</script>

<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Field Name</th>
                    <th>Field Value</th>
                </tr>
            </thead>
            <tbody v-if="loading">
                <tr>
                    <td colspan="2">Loading...</td>
                </tr>
            </tbody>
            <tbody v-if="data">
                <tr>
                    <th>First Name</th>
                    <td>{{ data.firstName }}</td>
                </tr>
                <tr>
                    <th>Last Name</th>
                    <td>{{ data.lastName }}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{ data.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
