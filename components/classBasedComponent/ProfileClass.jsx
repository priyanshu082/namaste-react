import React from "react";

//we cannot create class based component class based component without render method
class Profile extends React.Component{

    //class has a constructor
    //when we create a classs a constructor is called
    constructor(props){
        super(props)
        //for creating state
        this.state={
            count:0,
        }
    }


    render(){
        return(
            <div>
                profile class component
                <br/>
                name:{this.props.name}
                <br/>
                count:{this.state.count}
                <br/>
                <button onClick={()=>this.setState({
                    count:this.state.count+1
                })}>increase </button>
            </div>
        )
    }
}

export default Profile