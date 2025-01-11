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

const urlRefDelete = computed(() => {
    return backendEnvVar + '/api/course/' + courseIdRef.value;
});
const { performRequest: performRequestDelete } = useRemoteData(
    urlRefDelete,
    ref(true),
    ref('DELETE')
);

onMounted(() => {
    courseIdRef.value = route.params.id;
    performRequest();
});

const onDelete = () => {
    // TODO Confirm.
    performRequestDelete()
        .then((data) => {
            router.push({ name: 'courses' });
        })
        .catch((ignored) => {
            // TODO Handle.
        });
};
</script>
<template>
    <div>
        <div v-if="data">
            <button class="btn btn-danger" @click="onDelete">
                Delete course {{ data.title }} <small>({{ data.id }})</small>
            </button>
        </div>
    </div>
</template>
