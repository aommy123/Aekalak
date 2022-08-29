import React,{ Component } from 'react'

class Form extends Component{
constructor(props){
	super(props)
	this.state = { email:'',password:'',name:'',lastname:'',age:'', address:'',phoneNo:'',color:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { email, password, name, lastname, age, address, phoneNo, color } = this.state
	event.preventDefault()
	alert(`
	____ข้อมูลของคุณ____\n
	อีเมล : ${email}
	รหัส : ${password}
	ชื่อ : ${name}
    นามสกุล:${lastname}
	อายุ: ${age}
	ที่อยู๋ : ${address}
	เบอร์โทร : ${phoneNo}
    สีที่ชอบ : ${color}
	`)
}

handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

render(){
	return(
	<form onSubmit={this.handleSubmit}>
		<div>
		<label htmlFor='email'>อีเมล</label>
		<input
			name='email'
			value = {this.state.email}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='password'>รหัส</label>
		<input
			name='password'
			value = {this.state.password}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='name'>ชื่อ</label>
		<input
			name='name'
			value={this.state.name}
			onChange={this.handleChange}
		/>
		</div>
        <div>
		<label htmlFor='lastname'>นามสกลุ</label>
		<input
			name='lastname'
			value={this.state.lastname}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='age'>อายุ</label>
		<input
			name='age'
			value={this.state.age}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='address'>ที่อยู่</label>
		<input
			name='address'
			value={this.state.address}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='phoneNo'>เบอร์โทร</label>
		<input
			name='phoneNo'
			value={this.state.phoneNo}
			onChange={this.handleChange}
		/>
		</div>
        <div>
            <label htmlFor='coller'>สีที่ชอบ</label>
            <input
            name='coller'
            value={this.state.color}
            onChange={this.handleChange}
            />
        </div>
		<div>
		<button>ยืนยันข้อมูล</button>
		</div>
	</form>
	)
}
}

export default Form
