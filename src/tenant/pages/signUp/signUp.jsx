import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTenantServices } from '../../../services/tenantServices';

const TenantSignUpPage = () => {
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNo, setPhoneNo] = useState('');
  const [cities, setCities] = useState('');
  const theme = useTheme();
  const navigate = useNavigate();
  const {createTenant} = useTenantServices();

  const handlePasswordVisibility = (event) => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async () => {
    try {
      await createTenant({
        username: userName,
        name: name,
        email: email,
        password: password,
        phoneNo: phoneNo,
        cities: [cities],
      });

      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: theme.palette.page.background,
        backgroundColor: theme.palette.page.background,
        overflow: 'hidden',
      }}
    >
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
              paddingTop: '17%',
              paddingBottom: '17%',
              paddingTop: '17%',
              paddingBottom: '17%',
              borderTopLeftRadius: '10%',
              borderBottomLeftRadius: '10%',
            }}
          >
            <h2 style={{ marginTop: 10, fontSize: '250%' }}>Create Account</h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '10px',
                marginBottom: '16px',
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
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  placeholder="Username"
                />
              </div>

              <div name="Name" style={{ marginBottom: '16px', width: '48%' }}>
                <input
                  type="text"
                  id="Name"
                  style={{
                    width: '100%',
                    height: '40px',
                    paddingLeft: '5%',
                    border: 'none',
                    borderBottom: `1px solid ${theme.palette.primary.black}`,
                  }}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Name"

                />
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '10px',
                marginBottom: '16px',
                marginTop: '10px',
                marginBottom: '16px',
              }}
            >
              <div name="email" style={{ marginBottom: '16px', width: '48%' }}>
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
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                />
              </div>
              <div
                name="Password"
                style={{ marginBottom: '16px', width: '48%' }}
              >
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'} // Toggle input type between 'text' and 'password'
                    id="password"
                    style={{
                      width: '100%',
                      height: '40px',
                      paddingLeft: '5%',
                      border: 'none',
                      borderBottom: `1px solid ${theme.palette.primary.black}`,
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
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
                marginTop: '10px',
                marginBottom: '16px',
                marginTop: '10px',
                marginBottom: '16px',
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
                  onChange={(e) => setPhoneNo(e.target.value)}
                  value={phoneNo}
                  placeholder="Phone No"
                />
              </div>
              <div name="Cities" style={{ marginBottom: '16px', width: '48%' }}>
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
                  onChange={(e) => setCities(e.target.value)}
                  value={cities}
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
                href="/login"
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
    </Box>
  );
};

export default TenantSignUpPage;
