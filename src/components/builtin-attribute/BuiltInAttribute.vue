<template>
  <div>
    <h1>Built In Attribute</h1>
    <transition name="bounce">
      <component :is="dynamicComponent" />
    </transition>
    <button @click="toggleBetweenDynamicComponent(!isDynamicComponentAvailable)">Toogle</button>
    <div :style="{ 'margin-bottom': '20px' }"></div>
    <h4> key attribute</h4>
    <div v-for="(com, indx) in about" :key="indx">
      <AboutPage class="wer" :style="{ 'backgroundColor': '#0000ff6e', 'color': 'white' }" :company="com.company"
        :joinedDate="com.joinedDate">
      </AboutPage>
    </div>

    <div>
      <h4> ref attribute</h4>
      <h5>on toogle click dynamically adding data and styles to span</h5>

    </div>
    <div>
      <p>the company diclared the name <span ref="el"></span></p>
    </div>

  </div>
</template>
<script>
import AboutPage from '../builtin-attribute/About.vue';
import PrivacyPage from '../builtin-attribute/Privacy.vue';
export default {
  name: 'BuiltInAttribute',
  data() {
    return {
      isDynamicComponentAvailable: false,
      dynamicComponent: null,
      about: [
        { company: 'cognine', joinedDate: 'jun-15-2022' }
      ],
      privacy: [
        { privacy: 'there are some privacy and policies for the company' }
      ]
    }
  },
  methods: {
    toggleBetweenDynamicComponent(isDynamic) {
      this.isDynamicComponentAvailable = isDynamic;
      if (this.isDynamicComponentAvailable) {
        this.dynamicComponent = AboutPage;
        console.log(this.$refs.e)
        this.$refs.el.innerHTML="learn";
        this.$refs.el.style.backgroundColor='yellow';
      }
      else {
        this.dynamicComponent = PrivacyPage;
      }
    }

  },
  components: {
    AboutPage,
  }
}
</script>
<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>