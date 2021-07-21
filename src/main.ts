// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from 'dotenv';
import { createApp } from 'vue';
import App from './App.vue';
import './styles/main.scss';

createApp(App).mount('#app');
console.log(import.meta.env);
