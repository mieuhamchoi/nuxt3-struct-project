import api from './api';
export default defineNuxtPlugin(async () => {
  return {
    provide: {
      axios: api,
    },
  };
});
