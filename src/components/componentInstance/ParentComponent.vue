<!-- eslint-disable vue/no-reserved-keys -->
<template>
    <div>
        <ChildComponent :style="{'backgroundColor': 'white'}" @openForm="handleForm" >
            <template #header>
                click on below button to submit the form
            </template>
        </ChildComponent>
        <form v-if="isUserVoteValid" class="form">
            <div class="form-group mb-3">
                <label class="form-label">Name</label>
                <input type="text" v-model="form._name" placeholder="Enter your name" class="form-control">
            </div>
            <div class="form-group mb-3">
                <label class="form-label">Age</label>
                <input type="number" v-model="form.$age" placeholder="Enter your age" class="form-control"/>
                <span ref="list"></span>
            </div>
            <button type="reset" class="btn btn-primary" @click.prevent="resetForm()">Reset</button>
        </form>
    </div>

</template>
<script>
import ChildComponent from '../componentInstance/ChildComponent.vue';
import 'bootstrap'
export default {
    name: 'ParentComponent',
    data() {
        return {
            msg: 'hello',
            // eslint-disable-next-line vue/no-reserved-keys
            form:{
            _name:'',
            $age:0,
            },
            isUserVoteValid:false
        }
    },
    watch:{
        age(newvalue,oldvalue){
              if(newvalue<18){
                this.$refs.list.innerHTML="You are not allowed to vote";
                this.$refs.list.style.color="red";
              }else if(newvalue>18){
                  this.$refs.list.innerHTML="";
              }
        }
    },
    components:{
        ChildComponent
    },
    methods:{
        resetForm(){
            Object.assign(this.$data.form,{_name:'',$age:0});
        },
        handleForm(isFormAvailable){
            if(isFormAvailable){
                this.isUserVoteValid=true;
            }
            else{
                this.isUserVoteValid=false;
            }
        }
    }
}
</script>
<style scoped>
.form{
    background-color: darkcyan;
    padding: 20px;
    border-radius: 10px;

}
</style>
