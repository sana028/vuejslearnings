<template>
    <!--vue validation -->
    <DialogComponent :open="showModal">
        <div>
            <form class="form">
                <div class="form-group mb-3">
                    <label class="form-label">Name</label>
                    <input type="text" v-model="name" placeholder="Enter your name" id="name" class="form-control">
                    <span v-if="nameMsg!==''" :style="{ color: 'red' }">{{ nameMsg }}</span>
                </div>
                <div class="form-group mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" v-model="email" placeholder="Enter your email" id="email"
                        class="form-control" />
                    <span v-if="emailMsg!==''" :style="{ color: 'red' }">{{ emailMsg }}</span>
                </div>
            </form>
        </div>
        <template #btn>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary" @click.prevent="saveUserInfo()">Save</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal"
                    @click="handleSave()">Close</button>
            </div>
        </template>
    </DialogComponent>
</template>
<script>
import DialogComponent from '../../base/Dialog.vue';
import useVuelidate from '@vuelidate/core';
import { minLength, required, email, sameAs, helpers } from '@vuelidate/validators';
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: "EditComponent",
    data() {
        return {
            v$: useVuelidate(),
            name: '',
            email: '',
            id: this.$route.params.id,
            emailMsg:'',
            nameMsg:'',

        }
    },
    mounted() {
        this.name = this.userInfo.name;
        this.email = this.userInfo.email;
    },
    watch: {
        name: function (newName) {
            console.log(newName)
            if ((/^[a-zA-Z][a-zA-Z\s]*$/).test(newName)) {
                this.nameMsg = '';
            } else {
                this.nameMsg = 'Name is not valid it should start with alphabets';
            }
            if (newName == '') {
                this.nameMsg = 'Enter your name';
            }
        },
        email: function (newEmail) {
            if ((/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(newEmail)) {
                this.emailMsg = '';
            } else {
                this.emailMsg = 'email is not valid';
            }
        }
    },
    validations() {
        return {
            name: {
                required: helpers.withMessage("name is required", required),
                $autoDirty: true,
                minLength: minLength(3)
            },
            email: {
                required,
                email,
            }
        }
    },
    computed: {
        ...mapGetters('dialog', ['showEditDialog']),
        ...mapGetters(['getUserInfo']),
        showModal() {
            return this.showEditDialog;
        },
        userInfo() {
            return this.getUserInfo(this.id)
        }

    },
    methods: {
        ...mapMutations(['INSERT_DATA', 'UPDATE_USERDATA']),
        handleClose() {
            this.SHOW_EDIT_DIALOG = false;
            this.$router.go(-1);
        },
        handleSave() {
            this.SHOW_EDIT_DIALOG = false;
            this.$router.go(-1);
        },
        saveUserInfo() {
            this.v$.$touch();
            if (!this.v$.$error) {
                this.UPDATE_USERDATA({ index: this.id, name: this.name, email: this.email });
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