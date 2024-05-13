import { SHOW_DELETE_DIALOG,SHOW_EDIT_DIALOG,SHOW_ADD_DIALOG } from "../../types/MutationTypes/constants";

const dialogModule={
    namespaced: true,
    store:{
         showDeleteDialog:false,
         showAddDialog:false,
         showEditDialog:false,
    },
    mutations:{
        [SHOW_DELETE_DIALOG](state,payload){
            state.showDeleteDialog=payload;
         },
         [SHOW_EDIT_DIALOG](state,payload){
            state.showEditDialog=payload
         },
         [SHOW_ADD_DIALOG](state,payload){
            state.showAddDialog=payload
         }
    },
    getters:{
        showDeleteDialog(state){
            return state.showDeleteDialog;
        },
        showAddDialog(state){
            return state.showAddDialog;
        },
        showEditDialog(state){
            return state.showEditDialog;
        }
    }
}

export default dialogModule;