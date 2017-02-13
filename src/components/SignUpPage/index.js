import React, { Component } from 'react'
import "./SignUpPage.scss"

import TextBox from "../TextBox"
class SignUpPage extends Component {
	constructor(props) {
		super(props)
		this.handlePost = this.handlePost.bind(this)
		this.addPerson = this.addPerson.bind(this)
		this.handleNameChange = this.handleNameChange.bind(this)
		this.facebookLogin = this.facebookLogin.bind(this)
		this.fetchData = this.fetchData.bind(this)
		this.state = {
			showSecondPerson: false,
			showPostingBox: false,
			isAnonymous: true,
			name: false,
			email: false
		}

		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				this.setState({
		          ...this.state,
		          uid: user.uid,
		          isAnonymous: user.isAnonymous,
		          name: user.displayName,
		          email: user.email
		        })
				this.fetchData()
			}
		}.bind(this))
	}

	handlePost(ev) {
		ev.preventDefault()
		$(".signupForm").addClass("done")
		this.setState({
			...this.state,
			showPostingBox: "loading"
		})
		firebase.post(`signups/${this.context.uid}`, {
			data: {
				name: this.refs.formName.value,
				email: this.refs.formEmail.value,
				name2: this.refs.formName2 ? this.refs.formName2.value : null,
				allergies: this.maybe(this.refs.formAllergies.value, null),
				allergies2: this.refs.formAllergies2 ? this.refs.formAllergies2.value : null,
				arrival: this.maybe(this.refs.formArrival.value,null),
				departure: this.maybe(this.refs.formDeparture.value, null),
				comments: this.maybe(this.refs.formComments.value, null),
				isAnonymous: this.state.isAnonymous
			}
		}).then(() => {
			this.setState({
				...this.state,
				showPostingBox: "done"
			})
		}).catch(err => {
			console.error(err)
			this.setState({
				...this.state,
				showPostingBox: "fail"
			})
			$(".signupForm").removeClass("done")
		})
	}

	handleNameChange(ev) {
		if (ev.target.name === "name") {
			this.setState({
				...this.state,
				personName: ev.target.value
			})
		} else if (ev.target.name === "name2") {
			this.setState({
				...this.state,
				personName2: ev.target.value
			})
		}
		
	}

	showForm(ev) {
		ev.preventDefault()
		$(".signupForm").removeClass("done")
	}

	addPerson(ev) {
		ev.preventDefault()
		this.setState({
			...this.state,
			showSecondPerson: !this.state.showSecondPerson
		})
		return false;
	}

	formatPossession(name, empty) {

		if (!name) {
			return empty ? empty : ''
		}
		if (name.slice(-1).toLowerCase() === 's') {
			return name + "' "
		}
		return name + "'s "
	}

	maybe(variable, empty) {
		empty = typeof empty !== "undefined" ? empty : ''
		return variable ? variable : empty
	}

	fetchData() {
		firebase.fetch(`signups/${this.context.uid}`, {
			context: this,
		}).then(data => {
			this.refs.formName.value = data.name
			if (data.name2) {
				this.setState({
					...this.state,
					showSecondPerson: true
				})
				this.refs.formName2.value = this.maybe(data.name2)
				this.refs.formAllergies2.value = this.maybe(data.allergies2)
			}
			
			this.refs.formEmail.value = this.maybe(data.email)
			this.refs.formAllergies.value = this.maybe(data.allergies)
			this.refs.formArrival.value = this.maybe(data.arrival)
			this.refs.formDeparture.value = this.maybe(data.departure)
			this.refs.formComments.value = this.maybe(data.comments)

			this.setState({
				...this.state,
				showPostingBox: "done"
			})
		}).catch(error => {
			this.setState({
				...this.state,
				showPostingBox: false
			})

			if (this.state.name) {
				this.refs.formName.value = this.state.name
			}
			if (this.state.email) {
				this.refs.formEmail.value = this.state.email
			}
		})
	}

	facebookLogin(ev) {
		ev.preventDefault()
		firebase.authWithOAuthPopup('facebook', (error, user) => {
			console.log({user:user})
			if (!error){
				user = user.user
				this.setState({
		          ...this.state,
		          uid: user.uid,
		          isAnonymous: user.isAnonymous,
		          showFacebookButton: false
		        })
		        this.refs.formEmail.value = user.email
		        this.refs.formName.value = user.displayName
			} else {
				console.log(error)
			}
		})
	}

	logout(ev) {
		ev.preventDefault()
		firebase.unauth()
		firebase.auth().signInAnonymously()
	}

	componentWillMount() {
		if (this.context.uid) {
			this.fetchData()
		}
	}

	render() {
		return (
			<div>
				<TextBox>
				{this.state.showPostingBox && <div className="postingBox">
					{this.state.showPostingBox === "posting" && <div className="loading"><i className="fa fa-cog fa-spin fa-5x fa-fw"></i><br/>Posting</div>}
					{this.state.showPostingBox === "loading" && <div className="loading"><i className="fa fa-cog fa-spin fa-5x fa-fw"></i><br/>Loading</div>}
					{this.state.showPostingBox === "done" && <div className="done"><i className="fa fa-check-circle fa-5x fa-fw"></i><br/><b>You have successfully signed up!</b><br/>Changed your mind? You can still update your information by <a href="#" onClick={this.showForm}>clicking here.</a></div>}
					{this.state.showPostingBox === "fail" && <div className="fail"><i className="fa fa-exclamation-circle fa-5x fa-fw"></i><br/><b>Something went wrong!</b><br/>Check that you've entered everything correctly.</div>}
				</div>}
				<form onSubmit={this.handlePost} className="signupForm" data-abide>
					{this.state.isAnonymous && <button className="button facebookButton" type="button" onClick={this.facebookLogin}>Login with Facebook</button>}
					{!this.state.isAnonymous && <div className="row"><div className="column" style={{textAlign: "center"}}>Logged in with Facebook. <a href="#" onClick={this.logout}>(Log out)</a></div></div>}
					<div className="row align-center">
						<div className="column medium-7">
							<label>
								Name<span className="required">(required)</span>
								<input type="text" name="name" ref="formName" placeholder="John Doe" onChange={this.handleNameChange} required/>
								<span id="nameDescription" className="form-error">You must enter your name</span>
							</label>
							{this.state.showSecondPerson && <label id="formName2">
								Second person's name
								<input type="text" name="name2" ref="formName2" placeholder="Jane Doe" onChange={this.handleNameChange}/>
							</label>}
							<a href="#" onClick={this.addPerson}>
								{
									this.state.showSecondPerson ? 
										<span><i className="fa fa-minus-square-o" aria-hidden="true"></i> Remove second person</span> : 
										<span><i className="fa fa-plus-square-o" aria-hidden="true"></i> Add second person</span>
								}
							</a>
							
							<label>
								Email<span className="required">(required)</span>
								<input type="email" name="email" ref="formEmail" placeholder="name@example.com" required aria-describedby="emailDescription"/>
								<span id="emailDescription" className="form-error">You must enter a valid email</span>
							</label>
							<label>
								{this.formatPossession(this.state.personName)}Allergies
								<input type="text" name="allergies" ref="formAllergies" placeholder="cyanide, fire, hamster" />
							</label>
							{this.state.showSecondPerson && <label id="formAllergies2" >
								{this.formatPossession(this.state.personName2, "Second person's ")}Allergies
								<input type="text" name="allergies2" ref="formAllergies2" placeholder="cyanide, fire, hamster" />
							</label>}
							<label>
								Arrival date and time
								<input type="text" name="arrival" ref="formArrival" placeholder="6 July, 14:33" />
							</label>
							<label>
								Departure date and time
								<input type="text" name="departure" ref="formDeparture" placeholder="9 July, 19:29" />
							</label>
							<label>
								Comments
								<textarea name="comments" ref="formComments" className="formComments"></textarea>
							</label>
							<button className="large button" type="submit">{this.state.showPostingBox==="done" ? "UPDATE MY INFO" : "SIGN ME UP!"}</button>
							
						</div>
					</div>
					<div className="row">
						<div className="column signupInfo">
							<p>Sign up form will be open until the end of March.</p>
							<p>If you have any questions or have problems signing up, contact us at <a href="mailto:daniel@gabbie.se">daniel@gabbie.se</a>.</p>
						</div>
					</div>
				</form>
				</TextBox>
			</div>
		)
	}
}

SignUpPage.contextTypes = {
  uid: React.PropTypes.string
}

export default SignUpPage