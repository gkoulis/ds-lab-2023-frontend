<script setup>
import { ref } from 'vue';
import { useRemoteData } from '@/composables/useRemoteData.js';
import { useRouter } from 'vue-router';
const backendEnvVar = import.meta.env.VITE_BACKEND;

const router = useRouter();

// @EXERCISE : Add teacher (dropdown - load data [background], pre-process data, show data in dropdown)
const formDataRef = ref({
    title: '',
    semester: ''
});
const urlRef = ref(backendEnvVar + '/api/course');
const authRef = ref(true);
const methodRef = ref('POST');

const { data, performRequest } = useRemoteData(urlRef, authRef, methodRef, formDataRef);

const onSubmit = () => {
    performRequest()
        .then((data) => {
            router.push({ name: 'courses' });
        })
        .catch((ignored) => {
            // TODO Handle error.
        });
};
</script>

<template>
    <div class="bg-body-tertiary">
        <div class="container">
            <div class="row py-4 px-3">
                <div class="col-12">
                    <div class="mb-4">
                        <RouterLink class="small" :to="{ name: 'courses' }"
                            >Back to Courses</RouterLink
                        >
                        <h1 class="fs-3">New Course</h1>
                    </div>
                    <div>
                        <div class="mb-2">
                            <label for="firstName">Title</label>
                            <input
                                class="form-control"
                                id="firstName"
                                v-model="formDataRef.title"
                                type="text"
                            />
                        </div>
                        <div class="mb-2">
                            <label for="lastName">Semester</label>
                            <input
                                class="form-control"
                                id="lastName"
                                v-model="formDataRef.semester"
                                type="text"
                            />
                        </div>
                        <div class="">
                            <button class="btn btn-primary" @click="onSubmit" type="button">
                                Create new course
                            </button>
                        </div>
                    </div>
                    <pre>{{ formDataRef }}</pre>
                    <pre>{{ data }}</pre>
                </div>
            </div>
        </div>
    </div>
</template>
