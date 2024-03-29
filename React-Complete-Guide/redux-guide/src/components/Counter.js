//import { Component } from "react";// To use with class based components
import { useSelector, useDispatch /*connect*/ } from "react-redux"; //"Conect" is to be used with class based components
import classes from "./Counter.module.css";

import { counterActions } from "../store/counter-slice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const displayCounter = useSelector((state) => state.counter.isVisible);
  const dispatch = useDispatch();

  function incrementHandler() {
    dispatch(counterActions.increment());
  }

  function increaseHandler() {
    dispatch(counterActions.increase(5)); // {type: UNIQUE_IDENTIFIER, payload: 5}
  }

  function decrementHandler() {
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {displayCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/*
class Counter extends Component {

  incrementHandler(){
    this.props.increment()
  }

  decrementHandler(){
    this.props.decrement()
  }

  toggleCounterHandler(){

  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick = {this.incrementHandler.bind(this)}>Increment</button>
          <button onClick = {this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  };

}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({type: "increment"}),
    decrement: () => dispatch({type: "decrement"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

*/
