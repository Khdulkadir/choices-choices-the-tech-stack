<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  company: {
    type: Array,
    default: () => []
  },
  result: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <ul>
    <li v-for="(item, index) in result" :key="index">
      <h2>{{ item.title }}</h2>
      <div>
        <p>{{ item.amount }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
  
  ul {
    grid-area: 2 / 2 / 4 / 3;
    display: flex;
    flex-direction: column;
    row-gap: var(--average-gap);
    @media only screen and (max-width: 1600px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 20px;
    }
    @media only screen and (max-width: 700px) {
      display: block;
    }
  }

  li {
    height: 20%;
    background-color: var(--color-background-section);
    border-radius: 8px;
    box-shadow: var(--box-shadow);
    list-style: none;
    padding: var(--average-padding);

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 1600px) {
      height: 100%;
      margin-bottom: var(--average-gap)
    }

  }

  li h2 {
    padding-bottom: 0.5em;
    font-size: 1em;
  }

  li div {
    --size: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li div p {
    font-size: var(--size);
  }
</style>