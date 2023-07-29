import './App.css';

function Login() {

    return (
        <div class="border">
            <div class="login_bg">
                <div class="logo">
                    <img className="app-logo" src="/images/logo 2.png" alt="logo" />
                </div>
                <div className="formlogin" >
                    <label>Username</label><br />
                    <div className="form-control-login">
                        <input type="text" autoFocus="true"></input>
                    </div>
                    <label>Password</label>
                    <div className="form-control-login">
                        <input type="password" ></input>
                    </div>
                    <div className="text-link">
                        <label>Create new account</label>
                    </div>
                    <div className="text-link">
                        <label>Forgot password?</label>

                    </div>
                </div>
                <div class="Loginbutton">
                    <button class="Button" id="login">Login</button>
                </div>

            </div>
        </div>
    );
}

export default Login;