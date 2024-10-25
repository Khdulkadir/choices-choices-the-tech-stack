import './assets/styles/global.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from 'vue';
import App from './App.vue';
import { load } from './api/api';

async function bootstrap() {
  const data = await load(); // Fetch data before mounting the app

  const app = createApp(App, {
    initialData: data // Pass the fetched data as a prop to the App component
  });

  app.mount('#app');
}
bootstrap();