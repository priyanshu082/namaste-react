import React from "react";
import ReactDOM from "react-dom/client";
import Searchbar from "./searchbar";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom" ;
import RestroMenu from "./components/RestroMenu";
import Home from "./components/Home";


const AppLayout = () => {
  return (
    <div>
      <Searchbar/>
      <Outlet/>
    </div>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>
  },
  {
 path:'/restroMenu/:_id',
 element:<RestroMenu/>
},
{
  path:"/restro",
  element:<Home/>
},
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

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


    //export default component  it is used to export when there is one thing 
    //when there is lot of things either we use direct "export const component..." and can import it like {component}

