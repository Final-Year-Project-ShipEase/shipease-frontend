import { red } from '@material-ui/core/colors';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useState } from 'react';

const SignInPage = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [message, setMessage] = useState(""); // new state variable for the message

    const handlePasswordVisibility = (event) => {
        setShowPassword(!showPassword);
    };

    const handleAcceptTerms = () => {
        setAcceptTerms(!acceptTerms);
    };

    const handleSignIn = () => {
        setMessage("You have successfully signed in!");
    };

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <header>
                {/* Header content */}
            </header>
            <main>
                {/* Body content */}
                <div style={{display: 'flex'}}>
                    <div name="image" style={{ width: "45%", marginTop: "20px", zIndex: "2" }}>
                        <img src={require('../../resources/illustrator.png')} alt="Logo" style={{marginLeft:"7%",marginTop:"25%", width: "100%", height: "70%" }} />
                    </div>
                    <div className="right-div" style={{ width: "55%", height: "auto", position: "relative", zIndex: "1" }}>

                        <form style={{backgroundColor: "white", padding: "15%", paddingTop: "21%", paddingBottom:"21%", borderTopLeftRadius: "10%", borderBottomLeftRadius: "10%"}}>
                            <h2 style={{ marginTop: 10, fontSize: "250%" }}>Welcome back!</h2>
                            <h5 style={{ marginTop: -40, fontSize: "89%", color: 'gray' }}>Please enter your details!</h5>
                            <h2 style={{ marginTop: -15, fontSize: "170%"}}><strong>Sign In</strong></h2>
                            <div name="username">
                                <label style={{ fontSize: "12px", marginLeft: "1%", fontWeight: "bold" }}>Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    style={{ width: "100%", height: "40px", paddingLeft: "5%", border: "1px solid lightgrey"}}
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    placeholder="Muntazer Mehdi"
                                />
                            </div>
                            <div name="password" style={{marginTop:"2%"}}>
                                <label style={{ fontSize: "12px", marginLeft: "1%", fontWeight: "bold" }}>Password:</label>
                                <div style={{ position: "relative" }}>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        style={{ width: "100%", height: "40px", paddingLeft: "5%",  border: "1px solid lightgrey"}}
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        placeholder="Password"
                                    />
                                    {showPassword ? (
                                        <VisibilityOff
                                            style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", cursor: "pointer" }}
                                            onClick={handlePasswordVisibility}
                                        />
                                    ) : (
                                        <Visibility
                                            style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", cursor: "pointer" }}
                                            onClick={handlePasswordVisibility}
                                        />
                                    )}
                                </div>
                            </div>
                            <div name = "forgot" style={{textAlign: "right" }}>
                                <a href="/forgot-password" style={{ color: "#60B478", fontSize:"88%"}}>Forgot Password?</a>
                            </div>
                            <div name="checkbox">
                                <label style={{ color: "#60B478", fontSize: "13px", marginLeft: "1%", fontWeight: "bold" }}>
                                    <input
                                        type="checkbox"
                                        checked={acceptTerms}
                                        onChange={handleAcceptTerms}
                                    />
                                    I accept the Terms and Conditions
                                </label>
                            </div>
                            <div name="button" style={{ width: "100%", height: "40%" }}>
                                <button
                                    type="submit"
                                    style={{
                                        backgroundColor: "#60B478",
                                        color: "white",
                                        marginTop: "10px",
                                        padding: "10px 20px",
                                        fontSize: "16px",
                                        border: "none",
                                        cursor: "pointer",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "4px",
                                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"
                                    }}
                                    onClick={handleSignIn}
                                        onTouchStart={(e) => e.target.style.backgroundColor = "#509664"}
                                        onTouchEnd={(e) => e.target.style.backgroundColor = "#60B478"}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = "#509664"}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = "#60B478"}
                                >
                                    Sign In
                                </button>
                                <h1 style={{color: red}}>{message}</h1>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default SignInPage;
