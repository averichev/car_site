import {createRouter, createWebHistory} from "vue-router";

import Home from "../Views/CarList";
import CreateCar from "../Views/CreateCar";
import AboutProject from "../Views/AboutProject";
import BrandList from "../Views/Brand/BrandList";
import BrandAdd from "../Views/Brand/BrandAdd";

const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/create-car', component: CreateCar, name: 'create_car',},
    {path: '/brands', component: BrandList, name: 'brand_list',},
    {path: '/brands/add', component: BrandAdd, name: 'create_brand',},
    {path: '/about', component: AboutProject, name: 'about',},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export {router}