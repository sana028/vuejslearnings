<template>
    <!--Teleport-->
    <div class="builtin-component">
        <Teleport to="body">
            <div class="modal" v-if="isOpenModal">
                <p>Hello ! do you want remove the item</p>
                <div class="modalbtn">
                    <button @click="removeItem(true)">Ok</button>
                    <button @click="isOpenModal = false" class="close">Close</button>
                </div>
            </div>
        </Teleport>
      

        <!-- Transition Group -->
        <transition-group name="list" tag="ul">

            <li v-for="(item, index) in listItems" :key="item.id">
                {{ item.text }}
                <button @click="sendthedata(index)">Remove</button>
            </li>
        </transition-group>

        <!-- Keep Alive --> <!-- Transition -->
        <transition name="fade">
            <keep-alive>
                <component :is="dynamicComponent"></component>
            </keep-alive>
        </transition>
        <button @click="toggleComponent">Toggle Component</button>
    </div>
</template>
<script>
import AboutPage from '../builtin-attribute/About.vue';
import PrivacyPage from '../builtin-attribute/Privacy.vue';

export default {
    name: 'BuiltInComponent',
    data() {
        return {
            isOpenModal: false,
            showModal: false,
            showComponent: false,
            isRemove: false,
            index: -1,
            showContent: true,
            listItems: [
                { id: 1, text: 'sana@23.com' },
                { id: 2, text: 'sana@334.com' },
                { id: 3, text: 'ider@de.com' }
            ],
            nextItemId: 4,
            dynamicComponent: AboutPage
        }
    },
    methods: {
        toggleModal() {
            this.showModal = !this.showModal;
        },
        toggleContent() {
            this.showContent = !this.showContent;
        },
        removeItem(isRemoved) {
            this.isOpenModal = false;
            if (isRemoved) {
                this.listItems.splice(this.index, 1);
            }
        },
        toggleComponent() {
            this.showComponent = !this.showComponent;
            this.dynamicComponent = this.showComponent ? PrivacyPage : AboutPage;
        },
        sendthedata(index) {
            this.index = index;
            this.isOpenModal = true;
        }
    }

}
</script>
<style scoped>
.modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 16px #00000026;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.list-enter-active,
.list-leave-active {
    transition: opacity 0.5s;
}

.list-enter,
.list-leave-to {
    opacity: 0;
}

li {
    list-style: none;
    font-size: 16px;
    font-family: 'Times New Roman', Times, serif;
    display: flex;
    flex-direction: row;

    margin-bottom: 10px;
}

li button {
    margin-left: 39px;
}

ul {
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    padding: 25px;
}

.modalbtn {
    display: flex;
    justify-content: flex-end;
    margin: 10px;
}

.modalbtn button {
    background-color: cadetblue;
    border: none;
    margin-left: 5px;
    width: 30%;
    padding: 5px;
    color: white;
}

.modalbtn button .close {
    background-color: rgb(70, 78, 184);
    border: none;
    margin-left: 5px;
    width: 30%;
    padding: 5px;
}

#app {
    display: flex !important;
    flex-direction: column !important;
    align-content: center;
    justify-content: center;
    align-items: center;
}

.builtin-component {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>