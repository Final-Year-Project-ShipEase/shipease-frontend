import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import TextField from '../../components/inputs/textField/TextField.jsx';
import PhoneNumberInput from '../../components/inputs/phoneNumberField/PhoneNumber.jsx';
import CustomSwitch from '../../components/switch/Switch.jsx';
import CustomButton from '../../components/buttons/CustomButton.jsx';
import CustomButton2 from '../../components/buttons/CustomButton.jsx';
import { ReactComponent as LeftArrorSvg } from './assets/leftArrow.svg';
import { ReactComponent as CameraSvg } from './assets/camera.svg';
import profileImage from './assets/user_image.png';
import useDriverService from '../../../admin/services/driverService.jsx';
import useDriverApprovalService from '../../../admin/services/driverApprovalServices.jsx';

function CreateDriver() {
  const navigate = useNavigate();
  const { createDriver } = useDriverService();
  const { createDriverApproval } = useDriverApprovalService();

  const fileInputRef = useRef(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required'),
    phoneNo: Yup.string().required('Phone number is required'),
    city: Yup.string().required('City is required'),
    cnic: Yup.string().required('Cnic is required'),
    trackerNo: Yup.string().required('Tracker number is required'),
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
          name: '',
          password: '',
          cnic: '',
          phoneNo: '',
          city: '',
          trackerNo: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          const data = localStorage.getItem('tenantData');
          const tenantId = JSON.parse(data).data.id;
          console.log('tenantId', tenantId);
          try {
            const res = await createDriver({
              name: values.name,
              password: values.password,
              cnic: values.cnic,
              phoneNo: values.phoneNo,
              city: values.city,
              trackerNo: values.trackerNo,
              status: 'Inactive',
              tenant_id: tenantId,
            });
            if (res.status === 201) {
              console.log(res.driver.id);
              const res2 = await createDriverApproval({
                driver_id: res.driver.id,
                tenant_id: tenantId,
                admin_id: 1,
                permission: 'rejected',
                status: 'active',
              });

              if (res2.status === 201) {
                navigate('/driversgarage');
              }
            }
          } catch (error) {
            console.error('Error during form submission:', error);
          }
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
                    width: '50%',
                    ml: 5,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 2,
                    }}
                  >
                    <Box>
                      <Field
                        as={TextField}
                        label={'Name'}
                        name="name"
                        placeholder={'Ex : Hamza Idrees'}
                      />
                      <ErrorMessage
                        name="name"
                        render={(msg) => (
                          <Typography sx={{ color: 'red' }}>{msg}</Typography>
                        )}
                      />
                    </Box>
                    <Box>
                      <Field
                        as={TextField}
                        label={'Password'}
                        name="password"
                        placeholder={'Ex : hamza123'}
                        type="password"
                      />
                      <ErrorMessage
                        name="password"
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
                      mb: 2,
                    }}
                  >
                    <Box>
                      <Field
                        as={TextField}
                        label={'Cnic'}
                        placeholder={'Ex : xxxxx-xxxxxxx-x'}
                        name={'cnic'}
                      />
                      <ErrorMessage
                        name="cnic"
                        render={(msg) => (
                          <Typography sx={{ color: 'red' }}>{msg}</Typography>
                        )}
                      />
                    </Box>
                    <Box>
                      <Field
                        as={PhoneNumberInput}
                        label={'Phone Number'}
                        placeholder={'Ex : 03067566528'}
                        name={'phoneNo'}
                      />
                      <ErrorMessage
                        name="phoneNo"
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
                      mb: 2,
                    }}
                  >
                    <Box>
                      <Field
                        as={TextField}
                        label={'City'}
                        placeholder={'Ex : faisalabad'}
                        name={'city'}
                      />
                      <ErrorMessage
                        name="city"
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
                        label={'Status'}
                        name={'status'}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 2,
                    }}
                  >
                    <Box>
                      <Field
                        as={TextField}
                        label={'Tracker No'}
                        placeholder={'Ex : 2145243'}
                        name={'trackerNo'}
                      />
                      <ErrorMessage
                        name="trackerNo"
                        render={(msg) => (
                          <Typography sx={{ color: 'red' }}>{msg}</Typography>
                        )}
                      />
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <CustomButton
                      role={'secondary'}
                      onClick={() => navigate('/driversgarage')}
                      customStyle={{ width: '5rem' }}
                    >
                      Cancel
                    </CustomButton>
                    <CustomButton2
                      type="submit"
                      role={'primary'}
                      customStyle={{ width: '5rem', marginLeft: '1rem' }}
                    >
                      Submit
                    </CustomButton2>
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
