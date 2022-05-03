import {createRouter, createWebHistory} from "vue-router";

import Home from "../Views/CarList";
import CreateCar from "../Views/CreateCar";
import CarEdit from "../Views/CarEdit";
import AboutProject from "../Views/AboutProject";
import BrandList from "../Views/Brand/BrandList";
import BrandAdd from "../Views/Brand/BrandAdd";
import BodyAdd from "../Views/Body/BodyAdd";
import BodyList from "../Views/Body/BodyList";

const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/create-car', component: CreateCar, name: 'create_car',},
    {path: '/brands', component: BrandList, name: 'brand_list',},
    {path: '/brands/add', component: BrandAdd, name: 'create_brand',},
    {path: '/about', component: AboutProject, name: 'about',},
    {path: '/bodies', component: BodyList, name: 'body_list',},
    {path: '/bodies/add', component: BodyAdd, name: 'create_body',},
    {path: '/car-edit-:id', component: CarEdit, name: 'car_edit',},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export {router}