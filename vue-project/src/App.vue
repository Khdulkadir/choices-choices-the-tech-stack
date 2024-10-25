<script setup>
  import AccessibillityGraph from './components/AccessibillityGraph.vue'
  import AutomaticScan from './components/AutomaticScan.vue'
  import ErrorResult from './components/ErrorResult.vue'
  import TypeGraph from './components/TypeGraph.vue'
  import Title from './components/Title.vue'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import { defineProps } from 'vue';

const props = defineProps({
  initialData: {
    type: Object,
    required: true
  }
});

const { sites, scans } = props.initialData;
</script>

<template>
  <Header />

  <main>
    <Title :company="sites" :resultsheet="scans" />
    <AutomaticScan :result="scans[0]"/>
    <ErrorResult :result="scans[0].result"/>
    <TypeGraph />
    <AccessibillityGraph />    
  </main>

  <Footer />
</template>

<style scoped>
</style>