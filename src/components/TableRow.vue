<template>
  <tr class="hello">
      <td>{{grocery}}</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
  </tr>
</template>

<script>
export default {
  name: 'TableRow',
  props: {
    grocery: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
    margin: auto;
    border: 1px solid black; 
    text-align: center;
  }

  th, td {
    border: 1px solid lightgray;
    text-align: center;
  }
  
  #totalCost{
      background-color: lightgray;

  }
</style>
