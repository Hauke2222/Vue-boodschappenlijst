<template>
  <tr>
    <td>{{ value.name }}</td>
    <td>{{ value.price }}</td>
    <td>
      <input
        type="number"
        pattern=" 0+\.[0-9]*[1-9][0-9]*$"
        min="0"
        v-bind:value="value.quantity"
        @change="updateValue"
      />
    </td>
    <td>{{ value.subTotal }}</td>
  </tr>
</template>

<script>
export default {
  name: "TableRow",
  props: {
    value: Object,
  },
  methods: {
    updateValue: function(value) {
      this.$emit("input", value);
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
