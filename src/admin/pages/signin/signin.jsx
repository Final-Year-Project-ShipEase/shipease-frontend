import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useTheme } from '@mui/material';
import React, { useState } from 'react';
import UseAdminAuth from '../../auth/adminAuth';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../utils/spinner';

const SignInPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const theme = useTheme();
  const [message, setMessage] = useState('');
  const { login, loading } = UseAdminAuth();
  const navigate = useNavigate();

  const handlePasswordVisibility = (event) => {
    setShowPassword(!showPassword);
  };

  const handleAcceptTerms = () => {
    setAcceptTerms(!acceptTerms);
  };

  const handleSignIn = () => {
    login(name, password);
    navigate('/admin/dashboard');
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100VH',
        backgroundColor: theme.palette.page.background,
      }}
    >
      <header>{/* Header content */}</header>
      <main>
        {/* Body content */}
        {loading && <Spinner />}
        <div style={{ display: 'flex' }}>
          <div
            name="image"
            style={{ width: '45%', marginTop: '20px', zIndex: '2' }}
          >
            <img
              src={require('../../resources/illustrator.png')}
              alt="Logo"
              style={{
                marginLeft: '7%',
                marginTop: '25%',
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
                paddingTop: '21%',
                paddingBottom: '21%',
                borderTopLeftRadius: '10%',
                borderBottomLeftRadius: '10%',
              }}
            >
              <h2 style={{ marginTop: 10, fontSize: '250%' }}>Welcome back!</h2>
              <h5
                style={{
                  marginTop: -40,
                  fontSize: '89%',
                  color: theme.palette.page.h5,
                }}
              >
                Please enter your details!
              </h5>
              <h2 style={{ marginTop: -15, fontSize: '170%' }}>
                <strong>Admin Panel</strong>
              </h2>
              <div name="username">
                <label
                  style={{
                    fontSize: '12px',
                    marginLeft: '1%',
                    fontWeight: 'bold',
                  }}
                >
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  style={{
                    width: '100%',
                    height: '40px',
                    paddingLeft: '5%',
                    border: theme.palette.page.border,
                  }}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Muntazer Mehdi"
                />
              </div>
              <div name="password" style={{ marginTop: '2%' }}>
                <label
                  style={{
                    fontSize: '12px',
                    marginLeft: '1%',
                    fontWeight: 'bold',
                  }}
                >
                  Password:
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    style={{
                      width: '100%',
                      height: '40px',
                      paddingLeft: '5%',
                      border: theme.palette.page.border,
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
              <div name="forgot" style={{ textAlign: 'right' }}>
                <a
                  href="/forgot-password"
                  style={{
                    color: theme.palette.secondary.main,
                    fontSize: '88%',
                  }}
                >
                  Forgot Password?
                </a>
              </div>
              <div name="checkbox">
                <label
                  style={{
                    color: theme.palette.secondary.main,
                    fontSize: '13px',
                    marginLeft: '1%',
                    fontWeight: 'bold',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={handleAcceptTerms}
                  />
                  I accept the Terms and Conditions
                </label>
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
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
export default SignInPage;
