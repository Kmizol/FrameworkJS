
import React from "react";
import Button from "../BoutonComposant/Bouton";
import Display from "../DisplayComposant/Display";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      display: 0,
      currentNb: 0,
      waitOperation: true,
      waitNb: false,
      operation: false
    };
  }

  updateDisplay(value) {
    this.setState(state => {
      // Update display with specified value
      return { display: state[value] }
    });
  }

  select(nb) {
    // If display wait for a number
    if (this.state.waitNb) {
      this.setState({ total: 0 });
    }

    // If there is no operation
    if (!this.state.waitOperation) {
      this.setState(state => {
        return {
          total: parseFloat(state.currentNb) + parseFloat(state.total),
          waitOperation: true,
          currentNb: nb
        }
      });
    }
    // If an operation was pressed
    else {
      this.setState(state => {
        return { currentNb: parseFloat(state.currentNb + nb) }
      });
    }
    this.updateDisplay("currentNb");
  }

  addDot() {
    const regex = /\./;
    const foundDot = regex.test(this.state.currentNb);

    if (!foundDot) {
      // Wait for a number after a dot
      this.setState({ waitNb: true });
      this.setState(state => {
        return { currentNb: state.currentNb + "." }
      });
      this.updateDisplay("currentNb");
    }
  }

  operation(sign) {
    const regex = /\.$/;
    const foundDotAtEnd = regex.test(this.state.currentNb);

    // If the displayed number does not end with a dot
    if (this.state.display != 0 && !foundDotAtEnd) {
      this.equal();
      this.setState({
        operation: sign,
        waitOperation: false,
        waitNb: false
      });
    }
  }

  equal() {
    if (this.state.currentNb != 0) {
      this.setState(state => {
        return {
          total: eval(state.total + state.operation + state.currentNb),
          operation: false,
          currentNb: 0,
          waitNb: true
        }
      });
      this.updateDisplay("total");
    }
  }

  clear() {
    this.setState({
      total: 0,
      display: 0,
      currentNb: 0
    });
  }

  invert() {
    // Invert current number and update display with it
    if (this.state.total != 0 && this.state.currentNb != 0) {
      this.setState(state => {
        return {
          currentNb: parseFloat(state.currentNb) * -1
        }
      });
      this.updateDisplay("currentNb");
    }
    // After pressing equal : Invert the total and update display with it
    else if (this.state.total != 0 && this.state.currentNb == 0) {
      this.setState(state => {
        return {
          total: parseFloat(state.display) * -1
        }
      });
      this.updateDisplay("total");
    }
    // Update current number with the inverted display value
    else {
      this.setState(state => {
        return {
          currentNb: parseFloat(state.display) * -1,
        }
      });
      this.updateDisplay("currentNb");
    }
  }

  percent() {
    // Divide current number and update display with it
    if (this.state.total != 0 && this.state.currentNb != 0) {
      this.setState(state => {
        return {
          currentNb: parseFloat(state.currentNb) / 100
        }
      });
      this.updateDisplay("currentNb");
    }
    // After pressing equal : Divide the total and update display with it
    else if (this.state.total != 0 && this.state.currentNb == 0) {
      this.setState(state => {
        return {
          total: parseFloat(state.display) / 100
        }
      });
      this.updateDisplay("total");
    }
    // Update current number with the divided display value
    else {
      this.setState(state => {

        return {
          currentNb: parseFloat(state.display) / 100,
        }
      });
      this.updateDisplay("currentNb");
    }
  }


  render() {
    return (
    <div>
        <div className='display'>
        <hr/>
           <Display value={this.state.display} />
           <hr/>
        </div> 
        <div className='buttons'>
        <div className='button'>
            <Button bName="C" event={() => this.clear()} />
            <Button bName="x" event={() => this.operation("*")} />
            <Button bName="÷" event={() => this.operation("/")} />
            <Button bName="-" event={() => this.operation("-")} />
        </div>
        
        <div className='button'>
            <Button bName="7" event={() => this.select("7")} />
            <Button bName="8" event={() => this.select("8")} />
            <Button bName="9" event={() => this.select("9")} />
            <Button bName="+" event={() => this.operation("+")} />
        </div>

        <div className='button'>
            <Button bName="4" event={() => this.select("4")} />
            <Button bName="5" event={() => this.select("5")} />
            <Button bName="6" event={() => this.select("6")} />
            <Button bName="%" event={() => this.percent()} />
        </div>


        <div className='button'>
          <Button bName="1" event={() => this.select("1")} />
          <Button bName="2" event={() => this.select("2")} />
          <Button bName="3" event={() => this.select("3")} />
          <Button bName="=" event={() => this.equal()} />
        </div>

        <div className='button'>
        <Button bName="0" event={() => this.select("0")} />
        <Button bName="." event={() => this.addDot()} />
        <Button bName="+/-" event={() => this.invert()} /> 
        </div>
        </div>
     
    </div>

      
      
    );
  }
}

export default Calculator;

