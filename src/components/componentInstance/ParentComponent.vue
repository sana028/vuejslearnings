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
                <input type="text" v-model="_name" placeholder="Enter your name" class="form-control">
            </div>
            <div class="form-group mb-3">
                <label class="form-label">Age</label>
                <input type="number" v-model="$age" placeholder="Enter your age" class="form-control"/>
                <span ref="list"></span>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="resetForm()">Reset</button>
        </form>
        {{ _name + $name }}
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
            _name:'',
            $name:'',
            $age:0,
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
            console.log(this.$data)
            this._name='';
            this.$name='';
            this.$age=0;
        },
        handleForm(isFormAvailable){
            console.log('open')
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
