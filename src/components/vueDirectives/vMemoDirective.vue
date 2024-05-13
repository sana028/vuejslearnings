<template>
    <div class="v-memo">
        <h4 :style="{color:'black'}">Vmemo Example</h4>
        <div class="form-group">
            <lable class="exampleInputEmail1">Discount</lable>
            <input type="number" class="form-control" placeholder="enter your discount" v-model="discount"/>
        </div>
        <ul>
            <li v-for="product in products" :key="product.id" v-memo="[discount]">
               <h3>{{ product.name }} - ${{ product.price * (1 - discount) }}</h3>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'VMemoDirective',
    data() {
        return {
            selectedPersons: [
                { id: 'selected', name: 'jon' },
                { id: 'unselected', name: 'John' }
            ],
            products: [
                { id: 1, name: "Shirt", price: 20 },
                { id: 2, name: "Hat", price: 15 },
            ],
            discount: 0.1,
        }
    }
}
</script>
<style scoped>
 .v-memo{
    margin: 10px;
    padding:10px;
    background-color: rgba(32, 182, 32, 0.719);
    color:white;
 }

 li{
    margin:20px;
    list-style: none;
    color:rgb(7, 6, 7);
 }
</style>