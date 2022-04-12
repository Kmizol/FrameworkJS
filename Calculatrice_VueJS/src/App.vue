<template>
  <h1></h1>
  <div class="output">
    <div class="outputCalc">
      {{ calculatorValue || 0 }}
    </div>
  </div>
  <div class="buttons">
    <div class="button" v-for="n in btnArr" :key="n" :class="{ operator: ['C', '*', '/', '-', '+', '%', '='].includes(n)}">
      <div class="btn" @click="action(n)">
        {{ n }}
      </div>
    </div>
  </div>
 
</template>

<script>
export default {
  data() {
    return {
      calculatorValue: "",
      btnArr: [
        "C",
        "*",
        "/",
        "-",
        "7",
        "8",
        "9",
        "+",
        "4",
        "5",
        "6",
        "%",
        "1",
        "2",
        "3",
        "=",
        "0",
        ".",
      ],
      operator: null,
      previousCalculatorValue: "",
    };
  },
  methods: {
    action(n) {
      /* Append value */
      if (!isNaN(n) || n === ".") {
        this.calculatorValue += n + "";
      }
      /* Clear value */
      if (n === "C") {
        this.calculatorValue = "";
      }
      /* Percentage */
      if (n === "%") {
        this.calculatorValue = this.calculatorValue / 100 + "";
      }
      /* Operators */
      if (["/", "*", "-", "+"].includes(n)) {
        this.operator = n;
        this.previousCalculatorValue = this.calculatorValue;
        this.calculatorValue = "";
      }
      /* Calculate result using the eval function */
      if (n === "=") {
        this.calculatorValue = eval(
          this.previousCalculatorValue + this.operator + this.calculatorValue
        );
        this.previousCalculatorValue = "";
        this.operator = null;
      }
    },
  },
};
</script>

<style>
h1 {
  margin-top: 100px;
  text-align: center;
}
.output {
  text-align: right;
  width: min(290px, 50%);
  margin: 1px auto;
  padding: 1px;
  border: 0.5px solid rgb(0, 0, 0);

 
}
.outputCalc {

  padding: 15px;
  border-radius: 3px;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: min(300px, 70%);
  align-items: center;
  justify-content: center;
  margin: 10px auto;


}
.button {
  background-color: rgb(255, 255, 255);
  border: 0.5px solid rgb(0, 0, 0);
  padding: 6px;
  margin: 4px;
  font-size: 1.5em;
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.button:hover {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}
.operator {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}
.operator:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}
.MyId:hover {
  cursor: pointer;
  filter: brightness(130%);
}

</style>