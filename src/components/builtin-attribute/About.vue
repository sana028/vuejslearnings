<template>
    <div>
        <h3 class="learn" v-bind="$attrs">About</h3>
        <p>{{ $attrs.company }}</p>
        <p>{{ $attrs.joinedDate }}</p>
    </div>
</template>
<script>
export default{
    name:'AboutPage',
    inheritAttrs: false,
    mounted(){
        console.log(this.$attrs)
    }
}

</script>