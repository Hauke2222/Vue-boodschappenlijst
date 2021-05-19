<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <table style="width: 50%">
      <thead>
        <tr>
          <td>Naam</td>
          <td>Prijs</td>
          <td>Aantal</td>
          <td>Totaal</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="g in GroceryList" v-bind:key="g">
          <td>{{ g.name }}</td>
          <td>{{ g.price }}</td>
          <td>
            <input
              type="number"
              pattern=" 0+\.[0-9]*[1-9][0-9]*$"
              min="0"
              v-bind:value="g.quantity"
              @change="IncreaseQuantity()"
            />
          </td>
          <td>{{ g.subTotal }}</td>
        </tr>
        <tr>
          <td><b>Totaal:</b></td>
          <td>x</td>
          <td></td>
          <td id="totalCost">
            <b>{{ Totalprice }}</b>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//import TableRow from './components/TableRow.vue'
import Grocery from "./grocery.js";

export default {
  name: "App",
  components: {
    //TableRow
  },

  methods: {
    IncreaseQuantity() { 
    },
    CalculateTotal() {
      this.Totalprice = 0;
      for (let i = 0; i < this.GroceryList.length; i++) {
        this.Totalprice += this.GroceryList[i].price;
      }
    },
  },
  created() {
    console.log(this.GroceryList);
  },

  data() {
    return {
      Totalprice: 999,
      GroceryList: [
        new Grocery("Brood", "1,00", 1),
        new Grocery("Broccoli", "0,99", 1),
        new Grocery("Krentenbollen", "1,20", 1),
        new Grocery("Noten", "2,99", 1),
      ],
    };
  },
};
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

th,
td {
  border: 1px solid lightgray;
  text-align: center;
}
#totalCost {
  background-color: lightgray;
}
</style>
