import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import AddPy from "./html_and_js/AddPy";
import RemoveChar from "./html_and_js/RemoveChar";
import ExchangeChar from './html_and_js/ExchangeChar';
import CharAt_frontBack from './html_and_js/CharAt_frontBack';
import DevisableBy from './html_and_js/DevisableBy';
import TakingLastThreeChar from './html_and_js/TakingLastThreeChar';
import LargestNumber from './html_and_js/LargestNumber';
import FindGrade from './html_and_js/FindGrade';
import SumTwo from './html_and_js/SumTwo';
import FindEvenOdd from './html_and_js/FindEvenOdd';
import MultipleOfNumbers from './html_and_js/MultipleOfNumbers';
import Dumy from './html_and_js/Dumy';
import SumOf_MultipleThree from './html_and_js/SumOf_MultipleThree';
import SumOfNumbers from './html_and_js/SumOfArray';
import TicketsBased_onAge from './html_and_js/TicketsBased_onAge';
import DiscountCalculator from './html_and_js/DiscountCalculator';
import ArraySumCalculator from './html_and_js/ArraySumCalculator';
import ArrayReverseAndFactorial from './html_and_js/ArrayReverseAndFactorial';
import {Challenge} from './html_and_js/Challenge';
import UseImmer from './html_and_js/UseImmer';
import Option from './DummyProjects/QuizApp/Option';


import './App.css';

function App() {
  const todoItems22 = [
    { name: 'Buy Milk', dueDate: '10-2-2024' },
    { name: 'Go To College', dueDate: '10-2-2024' }
  ];

  return (
    <>
      <center className="todo-container">
        {/* <AppName />
        <AddTodo /> */}
        {/* <TodoItems todoItems={todoItems22} /> */}
      </center>
      {/* <MapMethod /> */}

      <div className="button-container">
       <AddPy />
      </div>
      <hr />

      <div className="button-container">
       <RemoveChar />
      </div>
      <hr />
      
      <div className="button-container">
       <ExchangeChar />
      </div>
      <hr />

      <div className="button-container">
       <CharAt_frontBack />
      </div>
      <hr />

      <div className="button-container">
       <DevisableBy />
      </div>
      <hr />

      <div className="button-container">
       <TakingLastThreeChar />
      </div>
      <hr />

      <div className="button-container">
       <LargestNumber />
      </div>
      <hr />

      <div className="button-container">
       <FindGrade />
      </div>
      <hr />

      <div className="button-container">
       <SumTwo />
      </div>
      <hr />

      <div className="button-container">
       <FindEvenOdd />
      </div>
      <hr />

      <div className="button-container">
       <MultipleOfNumbers />
      </div>
      <hr />

      <div className="button-container">
       <Dumy />
      </div>
      <hr />

      <div className="button-container">
       <SumOf_MultipleThree />
      </div>
      <hr />

      <div className="button-container">
       <SumOfNumbers />
      </div>
      <hr />

      <div className="button-container">
       <TicketsBased_onAge />
      </div>
      <hr />
      
      <div className="button-container">
       <DiscountCalculator />
      </div>
      <hr />

      <div className="button-container">
       <ArraySumCalculator />
      </div>
      <hr />

      <div className="button-container">
       <ArrayReverseAndFactorial />
      </div>
      <hr />

      <div className="button-container">
       <Challenge />
      </div>
      <hr />

      <div className="button-container">
       <UseImmer />
      </div>
      <hr />

      <div className="button-container">
       <Option />
      </div>
      <hr />
      
      
      
      
      
    </>
  );
}

export default App;
