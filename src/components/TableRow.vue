<template>
  <tr>
    <td>{{ value.name }}</td>
    <td>{{ "€" + value.price }}</td>
    <td>
      <input
        type="number"
        pattern=" 0+\.[0-9]*[1-9][0-9]*$"
        min="0"
        v-bind:value="value.quantity"
        @change="updateValue('quantity', $event.target.value)"
      />
    </td>
    <td>
      {{ "€" + calculateSubTotal() }}
    </td>
  </tr>
</template>

<script>
export default {
  name: "TableRow",
  props: {
    value: {
      type: Object,
      required: true,
    },
    // totalCost: {
    //   type: Number,
    //   required: true,
    // },
  },
  methods: {
    updateValue(key, value) {
      this.$emit("input", { ...this.value, [key]: value });
    },
    calculateSubTotal: function() {
      let subTotal =
        this.value.price.replace(",", ".") * parseInt(this.value.quantity);
      subTotal = subTotal.toFixed(2).replace(".", ",");
      //this.$emit((this.totalCost += subTotal));
      return subTotal;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  margin: auto;
  border: 1px solid black;
  border: 1px solid black;
  border: 1px solid black;
  text-align: center;
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
