<script setup>
import { RouterLink } from 'vue-router';
import { useApplicationStore } from '@/stores/application.js';
const applicationStore = useApplicationStore();
</script>

<template>
    <header class="text-bg-dark">
        <div class="container">
            <div class="d-flex flex-wrap justify-content-center py-2 px-3">
                <a
                    href="/"
                    class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                >
                    <span class="fs-5 fw-bolder text-white">API Client</span>
                </a>
                <ul class="nav nav-pills">
                    <!-- @EXERCISE: Add different color to active link (improve UX/UX). -->
                    <!-- @EXERCISE: Add different color to active link with nested routes (improve UX/UX). -->
                    <!-- @EXERCISE: Hide links that users has no access to. -->
                    <li class="nav-item" v-if="applicationStore.isAuthenticated === true">
                        <router-link :to="{ name: 'home' }" class="nav-link text-white"
                            >Home</router-link
                        >
                    </li>
                    <li class="nav-item" v-if="applicationStore.isAuthenticated === true">
                        <router-link :to="{ name: 'students' }" class="nav-link text-white"
                            >Students</router-link
                        >
                    </li>
                    <li class="nav-item" v-if="applicationStore.isAuthenticated === true">
                        <router-link :to="{ name: 'courses' }" class="nav-link text-white"
                            >Courses</router-link
                        >
                    </li>
                    <li class="nav-item" v-if="applicationStore.isAuthenticated === true">
                        <router-link :to="{ name: 'profile' }" class="nav-link text-white"
                            >Profile
                            <span style="font-size: 10px"
                                >({{ applicationStore.userData?.username }})</span
                            ></router-link
                        >
                    </li>
                    <li class="nav-item" v-if="applicationStore.isAuthenticated === false">
                        <router-link :to="{ name: 'login' }" class="nav-link text-white"
                            >Login</router-link
                        >
                    </li>
                    <li class="nav-item" v-if="applicationStore.isAuthenticated === true">
                        <router-link :to="{ name: 'logout' }" class="nav-link text-white"
                            >Logout</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
