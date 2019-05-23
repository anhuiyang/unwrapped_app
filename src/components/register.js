import React from 'react'
import RegisterForm from './registerForm'
class Register extends React.Component{
    constructor(props){
        super(props)
    }
    addShop=(shopData)=>{
        fetch('http://localhost:1234/api/shops', {
        method: 'post', 
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(shopData)
        }).then((response)=>{
            return response.json();
        })
    }
    render(){
        return (
            <div>
                <h1> Register</h1>
                <RegisterForm addShop={this.addShop}/>
            </div>
        )
    }
}
export default Register