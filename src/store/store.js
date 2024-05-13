import { createStore } from 'vuex'
import { UPDATE_NAME,UPDATE_EMAIL,UPDATE_USERDATA,INSERT_DATA, SHOW_DELETE_DIALOG, SHOW_EDIT_DIALOG,ADD_DATA,DELETE_USERDATA} from '../types/MutationTypes/constants.js';
import axios from 'axios';
import dialogModule from './helper/helper.js';

const store=createStore({
    state:{
       data:[],
       showDeleteDialog:false,
       showEditDialog:false
    },
    mutations:{
         [UPDATE_NAME](state,payload){
            state.data[payload.index].name=payload.name;
         },
         [UPDATE_EMAIL](state,payload){
            state.data[payload.index].email=payload.email;
         },
         [UPDATE_USERDATA](state,payload){
            const index=payload.index;
            state.data[index].name=payload.name;
           state.data[index].email=payload.email;
         },
         [INSERT_DATA](state,payload){
            state.data.push(payload);
         },
         [SHOW_DELETE_DIALOG](state,payload){
            state.showDeleteDialog=payload;
         },
         [SHOW_EDIT_DIALOG](state,payload){
            state.showEditDialog=payload
         },
         [ADD_DATA](state,payload){
            state.data=payload.results;
         },
         [DELETE_USERDATA](state,payload){
            state.data.splice(payload.index,1);
         }

    },
    actions:{
        //using api calling we can perform async chronous calls
        async fetchData(context){
         try{
             const results=await axios.get('http://localhost:3600/api/dummyData').then((res)=>{ return res.data});
             context.commit(ADD_DATA,{results});
         }catch(error){
            console.error(error);
         }
        }

    },
    getters:{
         getUserInfo:(state)=>(id)=>{
           return state.data[id];
         },
         getDeleteConfirmation(state){
            return state.showDeleteDialog;
         },
         getEditConfirmation(state){
            return state.showEditDialog;
         },
         getAllData(state){
            return state.data
         }
    },
    modules:{
      dialog:dialogModule
    }
})

export default store;