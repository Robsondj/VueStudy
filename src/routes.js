import Home from './components/home/Home.vue';
import Form from './components/form/Form.vue';

export const routes = [
    {
        path: '', 
        name: 'home',
        component: Home,
        title: 'Home',
        menu: true
    },
    {
        path: '/cadastro',
        name: 'cadastro',
        component: Form,
        title: 'Cadastro',
        menu: true
    },
    {
        path: '*',
        component: Home,
        menu: false
    }
]