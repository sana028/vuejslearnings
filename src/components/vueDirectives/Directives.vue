<template>
    <ChildComponentDirectives :name="userName">
        <template v-slot:header>
            <h3 :style="{color:'red'}">vue directives</h3>
        </template>
    </ChildComponentDirectives>
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email" v-model="userName">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                v-model="password">
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="checked">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="text"></textarea>
        </div>
        <div v-html="text"></div>
        <div >
            <button type="submit" class="btn btn-warning" @click.prevent="submitData()">Submit</button>
        </div>
    </form>
    <Teleport to="body">
        <div class="modalbtn" v-show="isDataValidated">
          <p>data validated correctly and submitted</p>
          <button @click="isDataValidated=false">Close</button>
        </div>
    </Teleport>
    <RouterView/>
</template>
<script>
import ChildComponentDirectives from '../vueDirectives/ChildComponentDirectives.vue';
import { RouterLink } from 'vue-router';

export default {
    name: 'VueDirectives',
    data() {
        return {
            userName: '',
            password: '',
            checked: false,
            text:'',
            isDataValidated:false
        }
    },
    components:{
       ChildComponentDirectives,
       
    },
    mounted(){
        this.text='Hi everyone ! <strong>welcome</strong> to cogning <em>technologies</em>'
    },
    methods:{
        submitData(){
            if(this.userName.length>0 && this.password.length>0 && this.checked){
                this.isDataValidated=true
                this.$router.push({name:'VMemo'})
            }
        }
    }
}
</script>
<style scoped>
form {
    border: 1px solid white;
    background-color: #3ca55c;
    padding: 20px
}
.modalbtn {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 16px #00000026;
}
</style>