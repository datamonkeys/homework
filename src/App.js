import React from 'react';
import './App.css';



class Homework extends React.Component {
  render() {
     const formatName =(user)=> {
      return user.firstName + ' ' + user.lastName; //img it is not working
    }

    const user = {
      firstName: 'Ruba',
      lastName: 'Abu Isa',
      avatarUrl: 'https://www.w3schools.com/howto/img_avatar2.png'
    };


    const getGreeting = (user) => {
        if(user) {
          return <h1>Hello, {formatName(user)}!</h1>;
        }
        return <h1>Hello, strenger</h1>;
      }

    const element =getGreeting(user);
   
    return element;
  }
}


export default Homework;


