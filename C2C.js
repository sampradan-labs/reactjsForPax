import React from 'react';

export class Child extends React.Component {

    onTrigger = (e)=>{
        this.props.parentCallback(e.target.myname.value)
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <h2>Message:{this.props.message}</h2>
                <form onSubmit={this.onTrigger}>
                    <input type='text' name='myname'/>
                    <input type='submit' value='Submit'/>
                    </form>
            </div>
        )
    }
}
export class Parent extends React.Component {
    state={name:''}

    handleCallback = (childData)=>{
        this.setState({name:childData});
    }
    render() {
        const {name}=this.state
        const query="Please provide SOS contact";
        return (
            //Communication child to parent
            <div><Child parentCallback= {this.handleCallback} /> 
            {name}
            {/* Communication parent to child */}
            <Child message="Message from Child"/>
            <Child message = {query}/>
            </div>
        )
    }
}