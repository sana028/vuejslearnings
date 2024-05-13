<template>
  <DialogComponent :open="showModal">
    <template #btn>
      <div class="buttonPosition">
          <button class="btn btn-secondary" @click="onClose()">No</button>
          <button class="btn btn-danger" @click="deleteTheData()">Delete</button>
        </div>
    </template>
  </DialogComponent>
</template>
<script>
import DialogComponent from '../../base/Dialog.vue';
import { mapGetters , mapMutations} from 'vuex';
export default {
  name: 'DeleteComponent',
  data() {
    return {
      open: false,
      id:this.$route.params.id,
    }
  },
  computed:{
    ...mapGetters('dialog',['showDeleteDialog']), // This binds the getter to a computed property
    showModal() {
      return this.showDeleteDialog; // Using the getter in a computed property
    }
  },
  components: {
    DialogComponent
  },
  methods:{
    ...mapMutations(['DELETE_USERDATA']),
    onClose() {
      this.SHOW_DELETE_DIALOG = false;
      this.$router.go(-1);
    },
    deleteTheData(){
       this.DELETE_USERDATA({index:this.id});
       this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
.buttonPosition {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
}
</style>