import React from "react";




export class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoggedIn:undefined, 
                        username:this.props.username, 
                        password:this.props.password};
    }

    handleUserNameChange(e){
        this.setState({username:e.target.value})
    }

    handlePwdChange(e){
        this.setState({password:e.target.value})
    }

    
    render(){
        return (
            <div>
                <div>
                    <input type='text' placeholder='Enter username' 
                        value={this.state.username} 
                        onChange={(e)=>this.handleUserNameChange(e)}/>
                </div>
                <div>
                    <input type='password' placeholder='Enter password' 
                            value={this.state.password} 
                            onChange={(e)=>this.handlePwdChange(e)}/>
                </div>
                <div>
                    <button onClick={(e)=>this.handleLogin(e)}>Login</button>
                    {this.toast}
                </div>
            </div>
        )
    }

    handleLogin(e){
        if (this.state.username == 'admin' && this.state.password == 'nimda') {
            this.setState({isLoggedIn: true});
            this.toast = <OkToast/>  //jsx code
        }
        else{
         this.setState({isLoggedIn:false});
         this.toast = <ErrorToast/>
        }
     }
}

///Different component: Keep outside the above class
function OkToast(){
    return <div className="success">Login Successful</div>
}

function ErrorToast(){
    return <div className="error">Login Failed</div>
}