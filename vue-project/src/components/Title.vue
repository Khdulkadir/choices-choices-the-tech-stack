<script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    company: {
      type: Array,
      default: () => []
    },
    resultsheet: {
      type: Array,
      default: () => []
    }
  });
</script>

<template>
  <section>
    <div>
      <h1>{{ company[0]?.title}}/home</h1>
      <p>Automatische Scan</p>
    </div>
    <nav>
      <button></button>
      <span><p>{{ resultsheet[0]?.date}}</p></span>
      <span>Aug.</span>
      <button></button>
    </nav>
  </section>
</template>

<style scoped>

  section {
    padding-top: var(--average-padding);
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 500px) {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  }

  section div {
    display: flex;
    flex-direction: column-reverse;
  }

  h1 {
    font-size: 2em;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  button {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: 10px 20px;
  }

  span {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: 10px 20px;
  }

</style>