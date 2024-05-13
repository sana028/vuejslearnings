<template>
  <div :class="openDialog ? 'modal show' : 'modal'" :style="openDialog ? { display: 'block',backgroundColor: '#00000052' } : { display: 'none' }"
    id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle" v-if="isDelete">Do you want to delete this Data</h5>
          <h5 class="modal-title" id="exampleModalLongTitle" v-if="isEdit">Edit the Data</h5>
          <h5 class="modal-title" id="exampleModalLongTitle" v-if="isAdd">Add Data</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="handleClose()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <slot name="btn"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  name: 'DialogComponent',
  inheritAttrs: false,
  data() {
    return {
      isDeleteComponent: false,
      openDialog: this.$attrs.open || false,
      componentName:this.$route.name,
    }
  },
  computed:{
      isDelete(){
        return this.$route.name=='Delete';
      },
      isEdit(){
        return this.$route.name=='Edit';
      },
      isAdd(){
        return this.$route.name=='Add';
      }
  },
  methods: {
    onClose() {
      this.$router.go(-1);
    },
    handleClose(){
        this.onCLose();
    }
  },

}
</script>
<style scoped>
.modal-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.modal.fade.show {
  display: block;
}

.buttonPosition {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
}

.modal-header {
  border-bottom: 0;
}

.close {
  border: 0;
  background-color: transparent;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: .5;
}
</style>