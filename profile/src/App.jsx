import "./App.css";
// import Profile from './Profile'
import HtmlTask_inReact from "./Components/PropertyByName";
// // import Demo33 from './Components/middleTask'
import InheritChildren from "./Components/childMethod";
// import SpreedMethod from './Components/spreedTech'
import PropsMethod22 from "./Components/PropsMeth";
import PackingList from "./Challenges/PackingLIst";
import PackingList1 from "./Challenges/PackingLIst1";
import DrinkList from './Challenges/Refactor';
import SplittingList from './Challenges/Splitting_a_list_in_two';
import NestedList22 from './Challenges/NestedList'
//import { recipes } from "./Challenges/nestedListItems";

function App() {
  let carType = {
    model: "23toyota",
    color: "white",
    size: "middle",
  };

  // let person = {
  //   name: "Tufail",
  //   gender: "Male",
  //   education: "MCS"
  // }

  // let num = 20;
  // if(num <18)
  //   {
  //     "show the result that 18 less than 20"
  //   }else{
  //     "render any thing"
  //   }

  return (
    <div className="container22">
      <div className="new"></div>
      {/* <Profile/>  */}
      <HtmlTask_inReact carType={carType} />
      {/* <Demo33 /> */}

      {/* The Below Method Are Used For Props */}
      <div className="para">
        <h2>This method is used for Props</h2>
        <PropsMethod22
          person1={{
            name: "Tufail",
            height: "5.5",
            age: "30",
            address: "Lakki Marwat KPK",
          }}
        />
      </div>

      {/* The Below Method Are Used for Children */}
      <InheritChildren>
        Name: {"jeep"} <br />
        Company: {"Sohrab"}
        <br />
        Size: {"Full size"}
        <br />
        Model: {"2011"}
      </InheritChildren>
      <div>


        <div className="para">
          <PackingList />
        </div>


        <div className="para">
          <PackingList1 />
        </div>

<hr />
        
          <DrinkList />
        <hr />

        
          <SplittingList />
        <hr />

        <div className="para">
          <NestedList22 />
        </div>


      </div>
    </div>
  );
}

export default App;
