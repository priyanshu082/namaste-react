import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>hellloooo</h1>;

const Title = (a) => {
  return <h1>{a}</h1>;
};
let a = 43456;
//name of component start with capital letter :- not mandatory
const Component = () => {
  return (
    <div>
      {Title(a)}
      {heading}
      <h1>components</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component />);

//React.Fragment || it will remove the extra div we are using to wrap the other components
//jsx can only have one parent 

const Component2 = () =>(
      <React.Fragment>
        {Title(a)}
        {heading}
        <h1>components</h1>
      </React.Fragment>
    );

    // or we can use <> </>  this is same as React.Fragment


    //virtual DOM
    //react fibre structure
    //no key<<<<<< index as key (ok ok) <<<< unique key(best practise)


