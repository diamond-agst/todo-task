import React, { useState } from "react";
import "./styles.scss"
import { Link } from "react-router-dom"

const LoginPage = () => {
    const [signin, setSignin] = useState(false)
    const [signupEmail, setSignupEmail] = useState()
    const [signupPassword, setSignupPassword] = useState()
    const [signupPasswordRepeat, setSignupPasswordRepeat] = useState()
    const [signinEmail, setSigninEmail] = useState()
    const [signinPassword, setSigninPassword] = useState()
    const [errorSignin, setErrorSignin] = useState(false)
    const [errorSignup, setErrorSignup] = useState(false)

    const submitSignup = (event) => {
        event.preventDefault()
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if(signin){
            if(signinEmail && signinPassword && regex.test(signinEmail) && signinPassword.length > 8){
                    window.open("/main", "_self");
            }else{
                setErrorSignin(true)
            }
        }else{
            if(signupEmail && signupPassword && signupPasswordRepeat && 
                regex.test(signupEmail) && signupPassword.length > 8 && signupPassword === signupPasswordRepeat){
                    setSignin(true)
                    setErrorSignup(false)
            }else{
                setErrorSignup(true)
            }
        }
    }

    return(
        <div className="loginWrapper">
            <div className="loginBlock">
                <div className="loginTab">
                    <button onClick={() => setSignin(true)} className={signin ? "active" : null}>Sign in</button>
                    <button onClick={() => setSignin(false)} className={signin ? null : "active"}>Sign up</button>
                </div>
                {signin ?
                <div className="loginForm">
                    <form>
                        <div className="loginInput">
                            <p>Email</p>
                            <input style={errorSignin ? {border: "2px solid red"} : null} onChange={e => setSigninEmail(e.target.value)} value={signinEmail}/>
                        </div>
                        <div className="loginInput">
                            <p>Password</p>
                            <input style={errorSignin ? {border: "2px solid red"} : null} onChange={e => setSigninPassword(e.target.value)} value={signinPassword}/>
                        </div>
                        <div className="loginCheckbox">
                            <label className="checkbox style-c">
                                <input type="checkbox"/>
                                <div className="checkbox__checkmark"></div>
                            </label>
                            <p>Keep Me Signed In</p>
                        </div>
                            <button onClick={submitSignup} className="loginButton">Sign in</button>
                    </form>
                </div> :
                <div className="loginForm">
                    <form>
                        <div className="loginInput">
                            <p>Email</p>
                            <input style={errorSignup ? {border: "2px solid red"} : null} onChange={e => setSignupEmail(e.target.value)} value={signupEmail}/>
                        </div>
                        <div className="loginInput">
                            <p>Password</p>
                            <input style={errorSignup ? {border: "2px solid red"} : null} onChange={e => setSignupPassword(e.target.value)} value={signupPassword}/>
                        </div>
                        <div className="loginInput">
                            <p>Password confirmation</p>
                            <input style={errorSignup ? {border: "2px solid red"} : null} onChange={e => setSignupPasswordRepeat(e.target.value)} value={signupPasswordRepeat}/>
                        </div>
                        <div className="loginCheckbox">
                            <label className="checkbox style-c">
                                <input type="checkbox"/>
                                <div className="checkbox__checkmark"></div>
                            </label>
                            <p>Accept</p>
                        </div>
                        <button onClick={submitSignup} className="loginButton">Sign up</button>
                    </form>
                </div>
            }
                
            </div>
        </div>
    )
}

export default LoginPage;