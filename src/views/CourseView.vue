<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const courseIdRef = ref(null);

onMounted(() => {
  courseIdRef.value = route.params.id;
});
</script>

<template>
  <div class="bg-body-tertiary">
    <div class="container">
      <div class="row py-4 px-3">
        <div class="col-12">
          <div class="mb-4">
            <RouterLink class="small" :to="{ name: 'course' }"
            >Back to Courses</RouterLink
            >
            <h1 class="fs-3">Course #{{ courseIdRef }}</h1>
          </div>
          <div class="mb-4">
            <ul class="nav border">
              <li class="nav-item">
                <RouterLink
                    class="nav-link"
                    :to="{ name: 'course-details', params: { id: courseIdRef } }"
                >Details</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                    class="nav-link"
                    :to="{ name: 'course-students', params: { id: courseIdRef } }"
                >Students</RouterLink
                >
              </li>
            </ul>
          </div>
          <div>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>