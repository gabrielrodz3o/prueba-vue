// Utilities
import { App } from 'vue';
import { createPinia } from 'pinia'
import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2';

export const install = (app: App) => {
  const pinia = createPinia();

  const persitedState = createPersistedStatePlugin({
    // persist all store by default (can be override in each store)
  
    persist: true,
  });

  pinia.use(persitedState);

  app.use(pinia);
};
