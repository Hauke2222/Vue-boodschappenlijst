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
        <table-row
          v-for="(g, index) in GroceryList"
          v-bind:key="index"
          v-model="GroceryList[index]"
        />
        <tr>
          <td><b>Totaal:</b></td>
          <td>-</td>
          <td></td>
          <td id="totalCost">
            <b>{{ "€" + totalPrice }}</b>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableRow from "./components/TableRow.vue";
import Grocery from "./grocery.js";

export default {
  name: "App",
  components: {
    TableRow,
  },

  computed: {
    totalPrice() {
      return this.GroceryList.map((grocery) => grocery.subTotal)
        .reduce((total, amount) => total + parseFloat(amount), 0)
        .toFixed(2);
    },
  },

  data() {
    return {
      GroceryList: [
        new Grocery("Brood", "1.00", 1),
        new Grocery("Broccoli", "0.99", 1),
        new Grocery("Krentenbollen", "1.20", 1),
        new Grocery("Noten", "2.99", 1),
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
