<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useApplicationStore } from '@/stores/application.js';

const router = useRouter();
const { clearUserData } = useApplicationStore();

const loading = ref(false);

const onFormSubmit = () => {
    // Perform a logout by flushing user data stored in tab state (pinia) and local storage (browser).
    // REMEMBER: authentication is stateless.
    // That is, if users store a valid JWT they can use it until is expired.
    // We cannot actually perform a logout because JWT cannot be invalided.
    // A solution is to blacklist the JWT until is expired.
    loading.value = true;
    clearUserData();
    setTimeout(function () {}, 2000); // Simulate a remote request.
    router.push({ name: 'login' });
};
</script>

<template>
    <div class="bg-body-tertiary">
        <div class="container">
            <div class="row py-4 px-3">
                <div class="col-4">
                    <div class="mb-4">
                        <h1 class="fs-3">Logout</h1>
                    </div>
                    <div class="spinner-border" role="status" v-if="loading">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <form v-else>
                        <button @click="onFormSubmit" type="submit" class="btn btn-primary">
                            Logout
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
