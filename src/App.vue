<script setup lang="ts">
import { ref } from 'vue'
import Modal from './components/Modal.vue';
const title = ref<string>("Hello");
const content = ref<string>("this is the content");
const show = ref<boolean>(false);
const showSecond = ref<boolean>(false);
const toggleShow = () =>
  show.value = !show.value

const toggleShowSecond = () => {
  showSecond.value = !showSecond.value;
}
  


</script>

<template>
  <h1>my first vue app</h1>
  <p>Welcome</p> <br />
  <button @click="toggleShow">Show Modal</button>

  <button @click="toggleShowSecond">Show Modal Two</button>
  <teleport to=".modals" v-if="show">
    <Modal :title="title" :content="content" theme="sale" @close="toggleShow">
      <h3>Big Mom </h3>
      <p>Signature: Ikoku Supremacy</p>
      <template v-slot:links>
        <a href="#">Life >>>>></a>
        <br>
        or
        <br>
        <a href="#">Slave >>>></a>
      </template>
    </Modal>
  </teleport>

  <teleport to=".modals" v-if="showSecond">
    <Modal title="One piece" content="villain" theme="sale" @close="toggleShowSecond">
      <h3>Kaido </h3>
      <p>Signature: Raimi Bagua</p>
      <h3>Choose your SideKick</h3>
      <template v-slot:fighter>
        <p>King >>>>></p>
        or
        <p>Queen >>>></p>
      </template>
    </Modal>
  </teleport>
</template>

<style scoped></style>
