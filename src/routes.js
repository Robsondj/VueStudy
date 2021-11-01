import Home from './components/home/Home.vue';
import Form from './components/form/Form.vue';

export const routes = [
    {
        path: '', 
        component: Home,
        title: 'Home'
    },
    {
        path: '/cadastro',
        component: Form,
        title: 'Cadastro'
    }
]