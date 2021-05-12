<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <table><TableRow :grocery="GroceryObjectList[index]" msg="Vue boodschappenlijst" v-for="(n, index) in GroceryObjectList" :key="index"/></table>
    <button @click="FillGroceryObjectList">Vul boodschappenlijst</button>
    
  </div>
</template>

<script>
import TableRow from './components/TableRow.vue'
import Grocery from './grocery.js'

export default {
  name: 'App',
  components: {
    TableRow
  },

  methods: {
    FillGroceryObjectList() {
      for (let i = 0; i < this.GroceryNamesPricesAndQuantities.length; i++) {
        this.GroceryObjectList.push(
          new Grocery(
            this.GroceryNamesAndPrices[i].name, 
            this.GroceryNamesPricesAndQuantities[i].price, 
            this.GroceryNamesPricesAndQuantities[i].quantity
          )
        );
      } 
    }
  },

  data() {
    return {
      GroceryObjectList: [],
      GroceryNamesPricesAndQuantities: [
        {'name': 'Brood', price: '1,00', quantity: 1},
        {'name': 'Broccoli', price: '0,99', quantity: 1},
        {'name': 'Krentenbollen', price: '1,20', quantity: 1},
        {'name': 'Noten', price: '2,99', quantity: 1},
      ],
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
