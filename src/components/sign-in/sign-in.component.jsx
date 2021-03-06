import React from "react"

import "./sign-in.styles.scss"
import InputForm from "../input-form/input-form.component"
import CustomButton from "../custom-button/custom-button.component"
import { auth, signInWithGoogle } from "../../firebase/firebase.utils"

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        try {
            const { email, password } = this.state
            
            await auth.signInWithEmailAndPassword(email, password)

            this.setState({
                "email": "",
                "password": ""
            })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <InputForm
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="Email"
                    />
                    <InputForm
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label="Password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit"> Sign in </CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
