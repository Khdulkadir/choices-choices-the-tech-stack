<script setup>
import AccessibillityGraph from './components/AccessibillityGraph.vue'
import AutomaticScan from './components/AutomaticScan.vue'
import ErrorResult from './components/ErrorResult.vue'
import TypeGraph from './components/TypeGraph.vue'
import Title from './components/Title.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />

  <main>
    <Title />
    <AutomaticScan />
    <ErrorResult />
    <TypeGraph />
    <AccessibillityGraph />    
  </main>

  <Footer />
</template>

<style scoped>
</style>