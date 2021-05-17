<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <table style="width:50%">
      <thead>
        <tr>
          <td>Naam</td>
          <td>Prijs</td>
          <td>Aantal</td>
          <td>Totaal</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(g) in GroceryList" v-bind:key="g">
            <td>{{ g.name }}</td>
            <td>{{ g.price }}</td>
            <td><input type="number" pattern=" 0+\.[0-9]*[1-9][0-9]*$" min="0" v-bind:value="g.quantity"></td>
            <td>{{ g.subTotal }}</td>
          </tr>
          <tr>
            <td><b>Totaal:</b></td>
            <td>x</td>
            <td></td>
            <td id="totalCost"><b>{{ Totalprice }}</b></td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//import TableRow from './components/TableRow.vue'
//import Grocery from './grocery.js'

export default {
  name: 'App',
  components: {
    //TableRow
  },

  methods: {

    IncreaseQuantity() {

    },

    CalculateSubTotal() {
      for (let i = 0; i < this.GroceryList.length; i++) {
        this.GroceryList[i].subTotal = this.GroceryList[i].quantity * this.GroceryList[i].price
      }
    },
    CalculateTotal() {
      this.Totalprice = 0;
      for (let i = 0; i < this.GroceryList.length; i++) {
        this.Totalprice += this.GroceryList[i].quantity * this.GroceryList[i].price
      }
    }
  },

  data() {
    return {
      //GroceryObjectList: [],
      Totalprice: 999,
      GroceryList: [
        {name: 'Brood', price: '1,00', quantity: 1, subTotal: '1,00'},
        {name: 'Broccoli', price: '0,99', quantity: 1, subTotal: '0,99'},
        {name: 'Krentenbollen', price: '1,20', quantity: 1, subTotal: '1,20'},
        {name: 'Noten', price: '2,99', quantity: 1, subTotal: '2,99'},
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
table {
    border: 1px solid black; 
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  th, td {
    border: 1px solid lightgray;
    text-align: center;
  }
  #totalCost{
    background-color: lightgray;
  }
</style>
