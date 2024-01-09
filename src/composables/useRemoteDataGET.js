import { ref } from 'vue';
import { useApplicationStore } from '@/stores/application.js';
const store = useApplicationStore();

export function useRemoteDataGET(url, auth) {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const headers = {
        'Content-Type': 'application/json'
    };

    if (auth === true) {
        headers['Authorization'] = 'Bearer ' + store.userData.accessToken;
    }

    fetch(url, {
        method: 'GET',
        headers: headers
    })
        .then((response) => {
            if (response.ok) {
                response.json().then((responseData) => {
                    data.value = responseData;
                });
            }
        })
        .catch((err) => {
            error.value = err;
        })
        .finally(() => {
            loading.value = false;
        });

    return { data, error, loading };
}
