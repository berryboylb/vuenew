

<script setup lang="ts">
import { IModal, IModalEmits } from '../types';
defineProps<IModal>()
const emit = defineEmits<IModalEmits>()

const closeModal = () => emit("close")
</script>


<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale' }">
            <h1>{{ title }}</h1>
            <p>{{ content }}</p>
            <slot />

            <div class="actions">
                <slot name="links" />
            </div>

            <div class="fight">
                <slot name="fighter" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: #fff;
    border-radius: 10px;
}

.backdrop {
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, .5);
    width: 100%;
    height: 100%;
}

p,
h1 {
    color: pink;
    text-align: center;
}

.sale {
    background: crimson;
    color: white;
}

.sale h1 {
    color: white;
}

.actions {
    text-align: center;
    margin: 30px 0px 10px 0;
}

.actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
}

.fight {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>
