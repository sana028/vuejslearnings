import { createWebHistory,createRouter, } from "vue-router";

const routes=[
    //lazy loading routes
    {
    path:'',
    name:'BuiltInComponent',
    component:import(/*webpackChunkName : 'BuiltInComponent' */'../components/built-in-components/BuiltInComponent.vue'),
    },
    {
    path:"/home" ,
    name:'BuiltInAttribute',
    component:import(/*webpackChunkName:"home" */'../components/builtin-attribute/BuiltInAttribute.vue'),
    beforeEnter(){
        //    console.log("before enter");
        return true;
    }
   },
   {
    path:"/instance",
    name:'ComponentInstance',
    component:import(/*webpackChunkName:"instance" */'../components/componentInstance/ParentComponent.vue'),
    beforeEach(){
        return true
    }
   },
   {
    path:'/directives',
    name:'VueDirectives',
    component:import(/* webpackChunkName : "directives"*/'../components/vueDirectives/Directives.vue'),
    children:[
        {
            path:'/directives/v-model',
            name:'VMemo',
            component:import(/* webpackChunkName : vMemo */'../components/vueDirectives/vMemoDirective.vue')
        }
    ]
   },
   {
    path:'/todo/',
    name:'Todo',
    component:import(/* webpackChunkName : "todo" */'../components/routerComponent/routeComp.vue'),
    meta:{ requiresAuth : true},
    children:[
        {
            path:'edit/:id',
            name:'Edit',
            component:import(/* webpackChunkName : "Edit" */'../components/Todo/Edit.vue'),
            props: true 
        },
        {
            path:'delete/:id',
            name:'Delete',
            component:import(/* webpackChunkName : "Delete" */'../components/Todo/Delete.vue'),
            props: true,
        },
        {
            path:'add',
            name:'Add',
            component:import(/* webpackChunkName : "Add" */'../components/Todo/Add.vue'),
            props: true 
        }
    ]
   }
]

const routers=createRouter({
    history:createWebHistory(),
    routes
})

routers.beforeEach((to,from,next)=>{
    if(to.name=='BuiltInComponent'){
      next();
    }
    if(to.name=='Todo' && to.meta.requiresAuth)
    {
        next();
    }
    next();
})



export default routers;

