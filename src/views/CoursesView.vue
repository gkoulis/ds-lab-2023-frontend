<script setup>
import { onMounted, ref } from 'vue';
import { useRemoteData } from '@/composables/useRemoteData.js';

const urlRef = ref('http://localhost:9090/course?page=0&size=100');
const authRef = ref(true);
const { data, loading, performRequest } = useRemoteData(urlRef, authRef);

onMounted(() => {
  performRequest();
});
</script>

<template>
    <div class="bg-body-tertiary">
        <div class="container">
            <div class="row py-4 px-3">
                <div class="col-12">
                    <div class="mb-4">
                        <h1 class="fs-3">Courses</h1>
                    </div>
                    <div>
                      <table class="table">
                        <thead>
                        <tr>
                          <!-- <th>Course ID</th> -->
                          <th>Course Title</th>
                          <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody v-if="data">
                        <tr v-for="course in data._embedded.courses">
                          <td>{{ course.title }}</td>
                          <td>
                            <!-- TODO course.id -->
                            <RouterLink :to="{ name: 'course-details', params: { id: course.id } }">
                              Display
                            </RouterLink>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <pre>{{ data }}</pre>
                </div>
            </div>
        </div>
    </div>
</template>
