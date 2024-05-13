<template>
    <DialogComponent :open="showModal">
        <div>
            <form class="form" >
                <div class="form-group mb-3">
                    <label class="form-label">Name</label>
                    <input type="text" v-model="name" placeholder="Enter your name" id="name" class="form-control">
                    <span v-if="v$.name.$error" :style="{color:'red'}">{{ v$.name.$errors[0].$message }}</span>
                </div>
                <div class="form-group mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" v-model="email" placeholder="Enter your email" id="email"
                        class="form-control" />
                    <span v-if="v$.email.$error" :style="{color:'red'}">{{ v$.email.$errors[0].$message }}</span>
                </div>
            </form>
        </div>
        <template #btn>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary" @click.prevent="saveUserInfo()">Save</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="handleClose()">Close</button>
            </div>
        </template>
    </DialogComponent>
</template>
<script>
import DialogComponent from '../../base/Dialog.vue';
import useVuelidate from '@vuelidate/core';
import { minLength, required, email, sameAs,helpers } from '@vuelidate/validators';
import { mapGetters , mapMutations} from 'vuex';
export default {
    name: "AddComponent",
    data() {
        return {
            v$: useVuelidate(),
            name: '',
            email: '',
        }
    },
    validations() {
        return {
            name: {
                required:helpers.withMessage("name is required", required), 
                $autoDirty: true,
                minLength:minLength(3)
            },
            email: {
                required,
                email,
            }
        }
    },
    computed: {
        ...mapGetters('dialog',['showAddDialog']), 
        showModal() {
            return this.showAddDialog; 
        },

    },
    methods: {
        ...mapMutations(['INSERT_DATA']),
        ...mapMutations('dialog',['SHOW_ADD_DIALOG']),
        handleClose() {
            this.SHOW_ADD_DIALOG = false;
            this.$router.go(-1);
        },
        saveUserInfo() {
            this.v$.$touch();
            if (!this.v$.$error) {
                this.INSERT_DATA({name:this.name,email:this.email});
                this.$router.go(-1);
            }
        }
    },
    components: {
        DialogComponent
    },
}
</script>
<style>
.form-group {
    margin-bottom: 10px;
}

.form-label {
    display: block;
    margin-bottom: 5px;
}

.form-input {
    width: 10
}
</style>