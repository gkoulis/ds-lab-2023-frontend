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
                        
                <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ userData.username }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Details</h6>
                    <p class="card-text"> id: {{ userData.id }}</p>
                    <p class="card-text"> roles: {{ userData.roles }}</p>
                </div>
                </div>
                <pre>{{ userData }}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
