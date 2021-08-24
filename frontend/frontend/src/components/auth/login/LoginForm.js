import './LoginForm.css'
import {useState,useEffect } from 'react'
import { useDispatch,connect } from 'react-redux'
import { loginUser } from '../../../redux/slices/authSlices'
import {useHistory} from 'react-router-dom';

const LoginForm = (auth) =>{
    const dispatch = useDispatch()
    const history= useHistory()
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()
    const [isLogged,setIsLogged] = useState(auth.isLogged)
    useEffect(() => {
        if(isLogged == true){
            history.push('/dashboard/inventory')
        }
        // history.push('/dashboard/inventory')
    });
    const login = ()=>{
        const data = {
            username:username,
            password:password
        }
        dispatch(loginUser(data))
        console.log(isLogged)

    }
    return(
        <div class="login-wrapper">
            <div class="login-header">
            <h1>Sign In Now</h1>
            </div>
            <div class="login-content">
                <p>Login with Username</p>
                <input type="text"
                onChange={(text)=>setUsername(text.target.value)}
                ></input>
                <p>Password</p>
                <input type="password"
                onChange={(text)=>setPassword(text.target.value)}

                ></input>
                <div class="forgot-password">
                    <a href="google.com">Forgot Password?</a>
                </div>
                <div class="login-btn">
                    <input type="submit" value="Login" onClick={login}></input>
                </div>
                <div class="signup-btn">
                    <a href="/signup">
                    <input type="submit" value="Signup"></input>
                    </a>
                </div>
            </div>
        </div>
           
    )
}
const mapStateToProps = (state)=>{
    return{
        isLogged: state.auth.isLogged
    }
}
export default connect(mapStateToProps, null)(LoginForm)
