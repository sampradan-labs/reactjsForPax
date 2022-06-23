//Working with JsX
//#1
export const element1 = <div>Hello React, I'm about to be a React Component</div>

//#2
export const user = {firstName:'Krishna', lastName:'Narayan', avatar:'logo192.png'}
export const element2 = <h1>Namaste {user.firstName +' '+ user.lastName} !</h1>

//#3 - With Conditionals
// if (user) 
//     return element2;
// else
//     return <h1>Welcome Stranger</h1>;

//#4 - Binding attributes with Jsx
export const element3 = <img src={user.avatar}/>
export const element4 = <div>
                            <h2>The ticking clock: {new Date().toLocaleTimeString()}</h2>
                        </div>
