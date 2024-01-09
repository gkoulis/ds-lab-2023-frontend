<script setup>
import { useRemoteDataGET } from '@/composables/useRemoteDataGET.js';

const { data, error, loading } = useRemoteDataGET('http://localhost:9090/api/student/test', true);
</script>

<template>
    <div class="bg-body-tertiary">
        <div class="container">
            <div class="row py-4 px-3">
                <div class="col-12">
                    <div class="mb-4">
                        <h1 class="fs-3">Students</h1>
                    </div>
                    <div>
                        <!-- @EXERCISE: Create a nice component to present user data -->
                        <pre>{{ data }}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
