import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useTheme } from '@mui/material';
import React, { useState } from 'react';

const TenantSignUpPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const theme = useTheme();
  const [message, setMessage] = useState(''); // new state variable for the message

  const handlePasswordVisibility = (event) => {
    setShowPassword(!showPassword);
  };

  const handleAcceptTerms = () => {
    setAcceptTerms(!acceptTerms);
  };

  const handleSignIn = () => {
    console.log('Name: ', name);
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <header>{/* Header content */}</header>
      <main>
        {/* Body content */}
        <div style={{ display: 'flex' }}>
          <div
            name="image"
            style={{ width: '45%', marginTop: '10px', zIndex: '2' }}
          >
            <img
              src={require('../../resources/illustrator.png')}
              alt="Logo"
              style={{
                marginLeft: '7%',
                marginTop: '15%',
                width: '100%',
                height: '70%',
              }}
            />
          </div>
          <div
            className="right-div"
            style={{
              width: '55%',
              height: 'auto',
              position: 'relative',
              zIndex: '1',
            }}
          >
            <form
              style={{
                backgroundColor: theme.palette.page.form,
                padding: '15%',
                paddingTop: '7%',
                paddingBottom: '11%',
                borderTopLeftRadius: '10%',
                borderBottomLeftRadius: '10%',
              }}
            >
              <h2 style={{ marginTop: 10, fontSize: '250%' }}>
                Create Account
              </h2>

              <div name="button" style={{ width: '100%', height: '40%' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: theme.palette.primary.white,
                    color: theme.palette.primary.blacl,
                    marginTop: '-20px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    border: 'none',
                    cursor: 'pointer',
                    width: '100%',
                    height: '100%',
                    borderRadius: '4px',
                    boxShadow: theme.palette.buttons.boxShadow,
                  }}
                  onClick={handleSignIn}
                  onTouchStart={(e) =>
                    (e.target.style.backgroundColor =
                      theme.palette.secondary.hover)
                  }
                  onTouchEnd={(e) =>
                    (e.target.style.backgroundColor =
                      theme.palette.secondary.main)
                  }
                >
                  <img
                    src={require('./google.png').default} // Path to the local image
                    style={{
                      marginRight: '10px', // Add space between the icon and text
                      width: '24px', // Adjust the width of the icon
                      height: '24px', // Adjust the height of the icon
                    }}
                  />
                  Sign in with Google
                </button>
              </div>

              <h5
                style={{
                  fontSize: '89%',
                  textAlign: 'center',
                  color: theme.palette.page.h5,
                }}
              >
                - OR -
              </h5>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  name="Firstname"
                  style={{ marginBottom: '16px', width: '48%' }}
                >
                  <input
                    type="text"
                    id="firstname"
                    style={{
                      width: '100%',
                      height: '40px',
                      paddingLeft: '5%',
                      border: 'none',
                      borderBottom: `1px solid ${theme.palette.primary.black}`,
                    }}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="First Name"
                  />
                </div>
                <div
                  name="lastname"
                  style={{ marginBottom: '16px', width: '48%' }}
                >
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      id="lastname"
                      style={{
                        width: '100%',
                        height: '40px',
                        paddingLeft: '5%',
                        border: 'none',
                        borderBottom: `1px solid ${theme.palette.primary.black}`,
                      }}
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  name="username"
                  style={{ marginBottom: '16px', width: '48%' }}
                >
                  <input
                    type="text"
                    id="Username"
                    style={{
                      width: '100%',
                      height: '40px',
                      paddingLeft: '5%',
                      border: 'none',
                      borderBottom: `1px solid ${theme.palette.primary.black}`,
                    }}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Username"
                  />
                </div>
                <div
                  name="PhoneNo"
                  style={{ marginBottom: '16px', width: '48%' }}
                >
                  <input
                    type="text"
                    id="phoneno"
                    style={{
                      width: '100%',
                      height: '40px',
                      paddingLeft: '5%',
                      border: 'none',
                      borderBottom: `1px solid ${theme.palette.primary.black}`,
                    }}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Phone No"
                  />
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  name="email"
                  style={{ marginBottom: '16px', width: '48%' }}
                >
                  <input
                    type="text"
                    id="email"
                    style={{
                      width: '100%',
                      height: '40px',
                      paddingLeft: '5%',
                      border: 'none',
                      borderBottom: `1px solid ${theme.palette.primary.black}`,
                    }}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Email"
                  />
                </div>
                <div
                  name="Password"
                  style={{ marginBottom: '16px', width: '48%' }}
                >
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      id="password"
                      style={{
                        width: '100%',
                        height: '40px',
                        paddingLeft: '5%',
                        border: 'none',
                        borderBottom: `1px solid ${theme.palette.primary.black}`,
                      }}
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      placeholder="Password"
                    />
                    {showPassword ? (
                      <VisibilityOff
                        style={{
                          position: 'absolute',
                          top: '50%',
                          right: '10px',
                          transform: 'translateY(-50%)',
                          cursor: 'pointer',
                        }}
                        onClick={handlePasswordVisibility}
                      />
                    ) : (
                      <Visibility
                        style={{
                          position: 'absolute',
                          top: '50%',
                          right: '10px',
                          transform: 'translateY(-50%)',
                          cursor: 'pointer',
                        }}
                        onClick={handlePasswordVisibility}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  name="Phoneno"
                  style={{ marginBottom: '16px', width: '48%' }}
                >
                  <input
                    type="text"
                    id="phoneno"
                    style={{
                      width: '100%',
                      height: '40px',
                      paddingLeft: '5%',
                      border: 'none',
                      borderBottom: `1px solid ${theme.palette.primary.black}`,
                    }}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Phone No"
                  />
                </div>
                <div
                  name="Cities"
                  style={{ marginBottom: '16px', width: '48%' }}
                >
                  <input
                    type="text"
                    id="Cities"
                    style={{
                      width: '100%',
                      height: '40px',
                      paddingLeft: '5%',
                      border: 'none',
                      borderBottom: `1px solid ${theme.palette.primary.black}`,
                    }}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Cities"
                  />
                </div>
              </div>

              <div name="button" style={{ width: '100%', height: '40%' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.buttons.main,
                    marginTop: '10px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    border: 'none',
                    cursor: 'pointer',
                    width: '100%',
                    height: '100%',
                    borderRadius: '4px',
                    boxShadow: theme.palette.buttons.boxShadow,
                  }}
                  onClick={handleSignIn}
                  onTouchStart={(e) =>
                    (e.target.style.backgroundColor =
                      theme.palette.secondary.hover)
                  }
                  onTouchEnd={(e) =>
                    (e.target.style.backgroundColor =
                      theme.palette.secondary.main)
                  }
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor =
                      theme.palette.secondary.hover)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor =
                      theme.palette.secondary.main)
                  }
                >
                  Create Account
                </button>
              </div>

              <div
                name="forgot"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <h4 style={{ marginRight: '8px' }}>Already have an account?</h4>
                <a
                  href="/forgot-password"
                  style={{
                    color: theme.palette.secondary.main,
                    fontSize: '88%',
                    textDecoration: 'none', // Optional: Remove underline from the link
                  }}
                >
                  Log In
                </a>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TenantSignUpPage;
