import React from 'react';
import './fetch.css'

export class Users extends React.Component {
    constructor() {
      super();
      this.state = { users: [], notification:'' };
    }
  
    getData() {
      fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(json => this.setState({ users: json.data }));
    }

    postData(){
        fetch('https://reqres.in/api/users',{
            method: 'POST',
            body: JSON.stringify({"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {console.log(json); this.setState({notification: `User Created ${json.first_name} ${json.last_name}`})});
        }
    
  
    render() {
      return (
        <div>
            <button onClick={()=>this.getData()}>GET</button><button onClick={()=>this.postData()}>POST</button>
            <span>{this.state.notification}</span>
          <h1>Users</h1>
          {            
            this.state.users.length == 0
              ? 'Loading users...'
              : this.state.users.map(user => (
                <figure key={user.id} className='card'>
                  <img src={user.avatar} />
                  <figcaption>
                    <b>Employee Id: DANSKE-{new Date().toLocaleString()}-{user.id}</b>
                    <p></p><b>{user.first_name} {user.last_name}</b>
                    <p></p><b>{user.email}</b>
                  </figcaption>
                </figure>
              ))
          }
        </div>
      );
    }
  }

  