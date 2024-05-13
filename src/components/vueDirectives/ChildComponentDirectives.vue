<template>
    <div>
        <slot name="header"></slot>
    </div>
</template>
<script>
export default{
    name:'ChildComponentDirectives',
    props:{
        name:String
    }
}
</script>
<style scoped>
</style>