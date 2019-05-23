import React from 'react'
class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = 
        {
            name: '',
            address: '',
            dryGoods: false,
            fruit: false,
            shampoos: false,
            vaggie: false,
            wine: false,
        }
    }

    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addShop(this.state)
        this.setState({name: '',address: '',dryGoods: false,fruit: false,shampoos: false,vaggie: false,wine: false,})
        document.getElementById('registerForm').reset();
    }

    valueOnChange=(e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    checkboxOnChange=(e)=>{
        this.setState({ [e.target.name]: !this.state[e.target.name]});
    }
    render(){
        return (
            <div>
                <form id='registerForm' onSubmit = {this.onSubmit}>
                <label>Venue Name</label>
                <input
                    type='text'
                    id='venuename'
                    name='name'
                    onChange={this.valueOnChange}
                    required/>
                <br/>
                <br/>
                <label>Venue Address</label>
                <input
                    type='text'
                    id='venueaddress'
                    name='address'
                    onChange={this.valueOnChange}
                    required/>
                <p>Unwrapped Items</p>
                <input
                    type='checkbox'
                    name='dryGood'
                    onChange={this.checkboxOnChange}
                    id='checkDryGood'/>
                    <label>Dry Goods</label>
                    <input
                    type='checkbox'
                    name='fruit'
                    onChange={this.checkboxOnChange}
                    id='checkFruit'/>
                    <label>Fruit</label>
                    <input
                    type='checkbox'
                    name='shampoo'
                    onChange={this.checkboxOnChange}
                    id='checkShampoo'/>
                    <label>Shampoo</label>
                    <input
                    type='checkbox'
                    name='vaggie'
                    onChange={this.checkboxOnChange}
                    id='checkVeggie'/>
                    <label>Veggie</label>
                    <input
                    type='checkbox'
                    name='wine'
                    onChange={this.checkboxOnChange}
                    id='checkWine'/>
                    <label>Wine</label>
                <br/>
                <br/>
                <input
                    className='submitRegisterForm'
                    id='submitRegiesterFormBtn'
                    type='submit'
                    value='Submit'/>
                </form>
            </div>
        )
    }
}

export default RegisterForm