import {
  LogoDevOutlined,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { Box, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useTenantAuth } from '../../auth/tenantAuth';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const { login } = useTenantAuth();

  const validationSchema = Yup.object({
    // name: Yup.string().required('Required'),
    // password: Yup.string().required('Required'),
    //TODO: remove this after testing
    name: Yup.string(),
    password: Yup.string(),
  });

  const handleAcceptTerms = () => {
    setAcceptTerms(!acceptTerms);
  };
  const handleSignUp = () => {
    navigate('/signup');
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
      }}
    >
      <div style={{ display: 'flex' }}>
        <div
          name="image"
          style={{ width: '45%', marginTop: '10px', zIndex: '2' }}
        >
          <img
            src={require('../../resources/illustrator.png')}
            alt="Logo"
            style={{
              marginLeft: '12%',
              marginTop: '20%',
              width: '95%',
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
          <Formik
            initialValues={{
              //TODO: remove this after testing
              name: 'hamza',
              password: '1234',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              try {
                await login(values.name, values.password);
                navigate('/dashboard');
              } catch (error) {
                console.error('Login error:', error);
              }
            }}
          >
            {(formikProps) => (
              <Form
                style={{
                  backgroundColor: theme.palette.page.form,
                  padding: '15%',
                  paddingTop: '17%',
                  paddingBottom: '17%',
                  borderTopLeftRadius: '10%',
                  borderBottomLeftRadius: '10%',
                }}
              >
                <h2 style={{ marginTop: 10, fontSize: '250%' }}>
                  Welcome back!
                </h2>
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
                  <strong>Sign In</strong>
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
                    id="name"
                    style={{
                      width: '100%',
                      height: '40px',
                      paddingLeft: '5%',
                      border: theme.palette.page.border,
                    }}
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    value={formikProps.values.name}
                    error={formikProps.errors.name}
                    placeholder="username"
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
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      value={formikProps.values.password}
                      error={formikProps.errors.password}
                      placeholder="Password"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                      }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </div>
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
                    onTouchStart={(e) =>
                      (e.target.style.backgroundColor =
                        theme.palette.secondary.hover)
                    }
                    onTouchEnd={(e) =>
                      (e.target.style.backgroundColor =
                        theme.palette.secondary.main)
                    }
                  >
                    {' '}
                    Sign In
                  </button>
                </div>
                <div name="button" style={{ width: '100%', height: '40%' }}>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: theme.palette.background.transparent,
                      color: theme.palette.primary.black,
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
                    onClick={handleSignUp}
                    onTouchStart={(e) =>
                      (e.target.style.backgroundColor =
                        theme.palette.secondary.hover)
                    }
                    onTouchEnd={(e) =>
                      (e.target.style.backgroundColor =
                        theme.palette.secondary.main)
                    }
                  >
                    Sign Up
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Box>
  );
};
export default SignInPage;
