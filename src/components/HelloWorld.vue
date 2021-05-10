<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
        <table id ="groceryTable" style="width:50%">
        <tr>
            <th>Product</th>
            <th>Prijs</th>
            <th>Aantal</th>
            <th>Totaal</th>
        </tr>
        <tr>
            <td>Brood</td>
            <td class="productPrice">€1,00</td>
            <td><input type="number" pattern=" 0+\.[0-9]*[1-9][0-9]*$" class="productQuantity" id="aantalBrood" min="0" value="1" onkeypress="return event.charCode >= 48 && event.charCode <= 57"></td>
            <td>
                <p class="productSubTotal" id="prijsBrood">€1,00</p>
            </td>
        </tr>
        <tr>
            <td>Broccoli</td>
            <td class="productPrice">€0,99</td>
            <td><input type="number" pattern=" 0+\.[0-9]*[1-9][0-9]*$" class="productQuantity" id="aantalBroccoli" min="0" value="1" onkeypress="return event.charCode >= 48 && event.charCode <= 57"></td>
            <td>
                <p class="productSubTotal">€0,99</p>
            </td>
        </tr>
        <tr>
            <td>Krentenbollen</td>
            <td class="productPrice">€1,20</td>
            <td><input type="number" pattern=" 0+\.[0-9]*[1-9][0-9]*$" class="productQuantity" id="aantalKrentenbollen" min="0" value="1" onkeypress="return event.charCode >= 48 && event.charCode <= 57"></td>
            <td>
                <p class="productSubTotal">€1,20</p>
            </td>
        </tr>
        <tr>
            <td>Noten</td>
            <td class="productPrice">€2,99</td>
            <td><input type="number" pattern=" 0+\.[0-9]*[1-9][0-9]*$" class="productQuantity" id="aantalNoten" min="0" value="1" onkeypress="return event.charCode >= 48 && event.charCode <= 57"></td>
            <td>
                <p class="productSubTotal">€2,99</p>
            </td>
        </tr>
        <tr>
            <td>Totaal</td>
            <td>x</td>
            <td id="totalQuantity">4</td>
            <td id="grandTotal">€6,18</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
