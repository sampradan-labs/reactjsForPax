import React from 'react'

export class CommentList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            <h1>This text comes form CommentList Component.</h1>
            {this.props.children}
        </div>
    }
}
//Use in index.js as
{/* <CommentList>
    <C1/>
    <C2/>
</CommentList> */}
