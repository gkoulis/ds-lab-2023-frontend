<script setup>
import { useApplicationStore } from '@/stores/application.js';
const { userData } = useApplicationStore();
</script>

<template>
    <div class="bg-body-tertiary">
        <div class="container">
            <div class="row py-4 px-3">
                <div class="col-12">
                    <div class="mb-4">
                        <h1 class="fs-3">Profile</h1>
                    </div>
                    <div>
                        <!-- @EXERCISE: Create a nice component to present user data -->
                        <pre>{{ userData }}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
