<!-- eslint-disable vue/no-unused-components -->
<template>
    <div>
        <h1 :style="{ textAlign: 'center' }">Router</h1>
        <div>
            <section class="vh-100 vw-100">
                <div class="container py-5 h-100 w-100">

                    <div class="col col-lg-9 col-xl-7">
                        <div class="card rounded-3">
                            <div class="card-body p-4">

                                <h4 class="text-center my-3 pb-3">To Do App</h4>

                                <form
                                    class="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                                    <!-- <div class="col-12">
                                            <div data-mdb-input-init class="form-outline">
                                                <input type="text" id="form1" class="form-control" />
                                                <label class="form-label" for="form1">Enter a task here</label>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <button type="submit" data-mdb-button-init data-mdb-ripple-init
                                                class="btn btn-primary">Save</button>
                                        </div>

                                        <div class="col-12">
                                            <button type="submit" data-mdb-button-init data-mdb-ripple-init
                                                class="btn btn-warning">Get tasks</button>
                                        </div> -->
                                </form>
                                <table class="table mb-4">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, indx) of userData" :key="indx">
                                            <td>{{ item.name }}</td>
                                            <td>{{ item.email }}</td>
                                            <td>
                                                <button type="submit" data-mdb-button-init data-mdb-ripple-init
                                                    class="btn btn-danger" @click="handleDelete(indx)">Delete</button>
                                                <button type="submit" data-mdb-button-init data-mdb-ripple-init
                                                    class="btn btn-warning ms-1" @click="handleEdit(indx)">Edit</button>
                                                <button type="submit" data-mdb-button-init data-mdb-ripple-init
                                                    class="btn btn-primary ms-1" @click="handleAddData()">Add</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <RouterView />
</template>
<script>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import { mapMutations } from 'vuex';
import { mapGetters, mapActions } from 'vuex';


export default {
    name: 'routerComponent',
    data() {
        return {
            data: ref(null),
            isDeleteClicked: false,
            isEditEnabled: false,
        }
    },
    mounted() {
        this.insertDatatoMap();
    },
    components: {
        RouterView
    },
    methods: {
        ...mapMutations('dialog',['SHOW_DELETE_DIALOG', 'SHOW_EDIT_DIALOG','SHOW_ADD_DIALOG']),
        ...mapMutations(['INSERT_DATA',]),
        ...mapActions(['fetchData']),
        handleDelete(index) {
            this.$router.push({ name: 'Delete', params: { id: index } });
            this.SHOW_DELETE_DIALOG(true);
        },
        handleEdit(index) {
            this.$router.push({ name: 'Edit', params: { id: index } })
            this.SHOW_EDIT_DIALOG(true);
        },
        insertDatatoMap() {
            this.fetchData();
        },
        handleAddData(){
            this.SHOW_ADD_DIALOG(true);
            this.$router.push({ name: 'Add' });
        }

    },
    computed: {
        ...mapGetters(['getAllData']),
        userData() {
            return this.getAllData;
        }
    },
    beforeRouteUpdate(to,from,next){
        if(to.name === 'Edit' || to.name=='Delete' ){
            next();
        }
        next();
    }

}
</script>
<style></style>