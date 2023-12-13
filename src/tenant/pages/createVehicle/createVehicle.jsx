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
import useVehicleService from '../../../admin/services/vehicleService.jsx';

function CreateVehicle() {
  // const { createUser } = useUserService();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const { addVehicle } = useVehicleService();
  const validationSchema = Yup.object().shape({
    ownerCnic: Yup.string().required('Cnic is required'),
    regNo: Yup.string().required('Registration number is required'),
    type: Yup.string().required('Vehicle Type is required'),
    location: Yup.string().required('Location is required'),
    trackerNo: Yup.string().required('Tracker number is required'),
    file: Yup.mixed().required('Cover Photo is required'),
  });

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Box sx={{ py: '24px', px: '32px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: '24px' }}>
        <LeftArrorSvg
          onClick={() => navigate('/vehiclesGarage')}
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
          Back To Vehicle list
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
        Add a new Vehicle
      </Typography>
      <Formik
        initialValues={{
          ownerCnic: '',
          regNo: '',
          type: '',
          status: '',
          location: '',
          trackerNo: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          // const res = await createUser(values);
          // if (res.status === 201) navigate('/users');
          const data = localStorage.getItem('tenantData');
          const tenantId = JSON.parse(data).id;
          const res = await addVehicle({
            driver_id: 1, //edit this
            ownerCnic: values.ownerCnic,
            regNo: values.regNo,
            type: ['SUV', 'Sedan', 'Hatchback'],
            status: 'Available',
            location: values.location,
            trackerNo: values.trackerNo,
            tenant_id: tenantId,
          });
          if (res.status === 201) navigate('/vehiclesGarage');
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
                        label={'Owner Cnic'}
                        name="ownerCnic"
                        placeholder={'Ex : xxxxx-xxxxxxx-x'}
                      />
                      <ErrorMessage
                        name="ownerCnic"
                        render={(msg) => (
                          <Typography sx={{ color: 'red' }}>{msg}</Typography>
                        )}
                      />
                    </Box>
                    <Box>
                      <Field
                        as={TextField}
                        label={'Reg No'}
                        name="regNo"
                        placeholder={'Ex : LEB9305'}
                      />
                      <ErrorMessage
                        name="regNo"
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
                        label={'Type'}
                        placeholder={'Ex : car'}
                        name={'type'}
                      />
                      <ErrorMessage
                        name="type"
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
                      mb: '16px',
                    }}
                  >
                    <Box>
                      <Field
                        as={TextField}
                        label={'Location'}
                        placeholder={'Ex : faisalabad'}
                        name={'location'}
                      />
                      <ErrorMessage
                        name="location"
                        render={(msg) => (
                          <Typography sx={{ color: 'red' }}>{msg}</Typography>
                        )}
                      />
                    </Box>
                    <Box>
                      <Field
                        as={TextField}
                        label={'Tracker No'}
                        placeholder={'Ex : 254125'}
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

export default CreateVehicle;
