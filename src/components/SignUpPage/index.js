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
				<TextBox title="Sign up form is closed">
					<p>Questions and requests can be sent to <a href="mailto:daniel@gabbie.se">daniel@gabbie.se</a></p>
				</TextBox>
			</div>
		)
	}
}

SignUpPage.contextTypes = {
  uid: React.PropTypes.string
}

export default SignUpPage