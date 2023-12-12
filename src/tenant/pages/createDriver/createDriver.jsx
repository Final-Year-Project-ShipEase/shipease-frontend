import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import TextField from '../../components/inputs/textField/TextField.jsx';
import PhoneNumberInput from '../../components/inputs/phoneNumberField/PhoneNumber.jsx';
import CustomSwitch from '../../components/switch/Switch.jsx';
import CustomButton from '../../components/buttons/CustomButton.jsx';

import { ReactComponent as LeftArrorSvg } from './assets/leftArrow.svg';
import { ReactComponent as CameraSvg } from './assets/camera.svg';
import profileImage from './assets/user_image.png';

function CreateDriver() {
  // const { createUser } = useUserService();
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    userName: Yup.string().required('User name is required'),
    firstName: Yup.string().required('First name is required'),
    middleName: Yup.string().required('Middle name is required'),
    lastName: Yup.string().required('Last name is required'),
    timeZone: Yup.string().required('Timezone is required'),
    language: Yup.string().required('Language is required'),
    file: Yup.mixed().required('Cover Photo is required'),
  });

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Box sx={{ py: '24px', px: '32px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: '24px' }}>
        <LeftArrorSvg
          onClick={() => navigate('/driversgarage')}
          style={{ cursor: 'pointer' }}
        />
        <Typography
          sx={{
            color: '#454C52',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '140%',
            ml: '8px',
          }}
        >
          Back To Drivers list
        </Typography>
      </Box>
      <Typography
        sx={{
          color: '#2C2C2C',
          fontSize: '18px',
          fontWeight: '600',
          mb: '32px',
        }}
      >
        Add a new Driver
      </Typography>
      <Formik
        initialValues={{
          email: '',
          phoneNumber: '',
          userName: '',
          firstName: '',
          middleName: '',
          lastName: '',
          timeZone: '',
          file: null,
          sendEmail: false,
          language: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          // const res = await createUser(values);
          // if (res.status === 201) navigate('/users');
        }}
      >
        {({ values, isSubmitting, setFieldValue, errors, touched, dirty }) => (
          <Form>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                }}
              >
                <Box
                  sx={{
                    width: '175px',
                    height: '175px',
                    borderRadius: '43px',
                    position: 'relative',
                    cursor: 'pointer',
                    backgroundColor: 'green',
                  }}
                  onClick={handleDivClick}
                >
                  <img
                    src={values.file || profileImage}
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '43px',
                    }}
                    alt="Profile"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      backgroundColor: '#000000B2',
                      top: '0px',
                      width: '175px',
                      height: '175px',
                      borderRadius: '43px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        width: '100%',
                      }}
                    >
                      <div>
                        <div
                          style={{ display: 'flex', justifyContent: 'center' }}
                        >
                          <CameraSvg />
                        </div>
                        <Typography
                          sx={{ color: 'white', textAlign: 'center' }}
                        >
                          Click to change
                          <br /> photo
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <input
                    ref={fileInputRef}
                    id="dropzone-file"
                    name="file"
                    type="file"
                    className="hidden"
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) =>
                          setFieldValue('file', e.target.result);
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  <ErrorMessage
                    name="file"
                    render={(msg) => (
                      <Typography sx={{ color: 'red' }}>{msg}</Typography>
                    )}
                  />
                </Box>
                <Box
                  sx={{
                    width: '60%',
                    ml: '32px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: '24px',
                    }}
                  >
                    <Box>
                      <Field
                        as={TextField}
                        label={'Email Address'}
                        name="email"
                        placeholder={'jean@jrs.com'}
                      />
                      <ErrorMessage
                        name="email"
                        render={(msg) => (
                          <Typography sx={{ color: 'red' }}>{msg}</Typography>
                        )}
                      />
                    </Box>
                    <Box>
                      <Field
                        as={PhoneNumberInput}
                        label={'Phone number'}
                        name="phoneNumber"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        render={(msg) => (
                          <Typography sx={{ color: 'red' }}>{msg}</Typography>
                        )}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: '40px',
                    }}
                  >
                    <Box>
                      <Field
                        as={TextField}
                        label={'User Name'}
                        placeholder={'Ex : John Doe'}
                        name={'userName'}
                      />
                      <ErrorMessage
                        name="userName"
                        render={(msg) => (
                          <Typography sx={{ color: 'red' }}>{msg}</Typography>
                        )}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: '361px',
                        display: 'flex',
                        alignItems: 'end',
                      }}
                    >
                      <Field
                        as={CustomSwitch}
                        label={'Active Driver'}
                        name={'sendEmail'}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: '16px',
                    }}
                  >
                    <Box>
                      <Field
                        as={TextField}
                        label={'First Name'}
                        placeholder={'Ex : John Doe'}
                        name={'firstName'}
                      />
                      <ErrorMessage
                        name="firstName"
                        render={(msg) => (
                          <Typography sx={{ color: 'red' }}>{msg}</Typography>
                        )}
                      />
                    </Box>
                    <Box>
                      <Field
                        as={TextField}
                        label={'Middle Name'}
                        placeholder={'Ex : John Doe'}
                        name={'middleName'}
                      />
                      <ErrorMessage
                        name="middleName"
                        render={(msg) => (
                          <Typography sx={{ color: 'red' }}>{msg}</Typography>
                        )}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: '40px',
                    }}
                  >
                    <Box>
                      <Field
                        as={TextField}
                        label={'Last Name'}
                        placeholder={'Ex : John Doe'}
                        name={'lastName'}
                      />
                      <ErrorMessage
                        name="lastName"
                        render={(msg) => (
                          <Typography sx={{ color: 'red' }}>{msg}</Typography>
                        )}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: '40px',
                    }}
                  >
                    <Box>
                      <Field
                        as={TextField}
                        label={'Language'}
                        placeholder={'English'}
                        name={'language'}
                      />
                      <ErrorMessage
                        name="language"
                        render={(msg) => (
                          <Typography sx={{ color: 'red' }}>{msg}</Typography>
                        )}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <CustomButton
                      role={'secondary'}
                      customStyle={{ width: '361px' }}
                      onClick={() => navigate('/users')}
                    >
                      Cancel
                    </CustomButton>
                    <CustomButton
                      type="submit"
                      role={'primary'}
                      customStyle={{ width: '361px' }}
                    >
                      Submit
                    </CustomButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default CreateDriver;
