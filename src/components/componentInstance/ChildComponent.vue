<template>
 <div class="menu">
    <!-- <h1 v-bind="$attrs">Child Component</h1> -->
    <slot v-bind="$attrs"></slot>
     <slot name="header"></slot>
    <button  @click="handleClick()" class="btn btn-warning override">Vote form</button>

 </div>
</template>
<script>
export default{
    name:'ChildComponent',
    data(){
        return{
           isFormAvailable:false
        }
    },
    mounted(){
        this.$el.children[0].style.backgroundColor="red";
       if(this.$slots.header){
          alert('text sent to child')
       }
    },
    methods:{
        handleClick(){
            this.$parent.form.$age=18;
            this.isFormAvailable=!this.isFormAvailable
            this.$emit('openForm',this.isFormAvailable)
            console.log("Child Component");
        }
    }
}
</script>

<style scoped>
.menu{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.override{
    background-color: #ffc107 !important;
    margin-top:20px;
    margin-bottom:10px;
}
</style>