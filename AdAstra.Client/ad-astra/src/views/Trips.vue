<script>
import Trip from '../components/Trip.vue'

export default {
    components: {
        Trip,
    }
}

</script>

<template>
<section class="hero-section">
    <div class="card-grid">
        <Trip></Trip>
        <Trip></Trip>
        <Trip></Trip>
        <Trip></Trip>
        <Trip></Trip>
        <Trip></Trip>
        <Trip></Trip>
        <Trip></Trip>
        <Trip></Trip>
        <Trip></Trip>
    </div>
</section>
</template>

<style scoped>
.hero-section{
  align-items: flex-start;
  display: flex;
  min-height: 100%;
  justify-content: center;
  padding: 64px 24px;
  background-color: white;
}

.card-grid{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  max-width: 1200px;
  width: 100%;
  margin-top: 96px;
}

@media(min-width: 540px){
  .card-grid{
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media(min-width: 960px){
  .card-grid{
    grid-template-columns: repeat(4, 1fr); 
  }
}
</style>