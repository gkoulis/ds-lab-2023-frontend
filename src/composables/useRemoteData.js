import { ref } from 'vue';
import { useApplicationStore } from '@/stores/application.js';

const store = useApplicationStore();

export function useRemoteData(urlRef, authRef, methodRef = ref('GET'), bodyRef = ref(null)) {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const performRequest = () => {
        const headers = {
            'Content-Type': 'application/json'
        };

        if (authRef.value === true) {
            headers['Authorization'] = 'Bearer ' + store.userData.accessToken;
        }
        const config = {
            method: methodRef.value,
            headers: headers
        };

        if (bodyRef.value !== null) {
            config.body = JSON.stringify(bodyRef.value);
        }

        return fetch(urlRef.value, config)
            .then((response) => {
                if (response.ok) {
                    response.json().then((responseData) => {
                        data.value = responseData;
                    });
                }
                return Promise.resolve(data.value);
            })
            .catch((err) => {
                error.value = err;
                return Promise.reject(error.value);
            })
            .finally(() => {
                loading.value = false;
            });
    };

    return { data, error, loading, performRequest };
}
