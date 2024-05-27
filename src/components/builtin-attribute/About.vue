<template>
    <div>
        <h3 class="learn" v-bind="$attrs">About</h3>
        <p>{{ $attrs.company }}</p>
        <p>{{ $attrs.joinedDate }}</p>
        <p>Some text about the company and its history.</p>
        <input type="text" placeholder="enter some data"/>
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