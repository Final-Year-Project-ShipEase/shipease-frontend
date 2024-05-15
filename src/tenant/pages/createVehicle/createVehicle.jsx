import React, { useRef, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import TextField from '../../components/inputs/textField/TextField.jsx';
import CustomSwitch from '../../components/switch/Switch.jsx';
import CustomButton from '../../components/buttons/CustomButton.jsx';
import { ReactComponent as LeftArrorSvg } from './assets/leftArrow.svg';
import { ReactComponent as CameraSvg } from './assets/camera.svg';
import profileImage from './assets/user_image.png';
import useVehicleService from '../../../admin/services/vehicleService.jsx';
import { useSnackbar } from '../../../utils/snackbarContextProvider.jsx';

function CreateVehicle() {
  // const { createUser } = useUserService();

  const [selectedFile, setSelectedFile] = useState('');

  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const licenseFileInputRef = useRef(null);
  const inspectionFileInputRef = useRef(null);
  const { addVehicle } = useVehicleService();
  const { show } = useSnackbar();
  const validationSchema = Yup.object().shape({
    ownerCnic: Yup.string().required('Cnic is required'),
    regNo: Yup.string().required('Registration number is required'),
    type: Yup.string().required('Vehicle Type is required'),
    location: Yup.string().required('Location is required'),
    trackerNo: Yup.string().required('Tracker number is required'),
  });
  const [selectedLicenseFile, setSelectedLicenseFile] = useState('');
  const [selectedInspectionFile, setSelectedInspectionFile] = useState('');

  const handleLicenseDivClick = () => {
    licenseFileInputRef.current.click();
  };

  const handleInspectionDivClick = () => {
    inspectionFileInputRef.current.click();
  };

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
          width: '',
          height: '',
          cost: '',
          licenseImage: '',
          inspectionImage: '',
          // TODO: utalize these fields
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          if (!selectedFile) {
            show('Please select an image', 'error');
            return;
          }

          const data = localStorage.getItem('tenantData');
          const tenantId = JSON.parse(data).data.id;

          const formData = new FormData();
          formData.append('image', selectedFile.split(',')[1]);
          formData.append('driver_id', '2');
          formData.append('ownerCnic', values.ownerCnic);
          formData.append('regNo', values.regNo);
          formData.append('type', values.type);
          formData.append('status', 'Available');
          formData.append('location', values.location);
          formData.append('trackerNo', values.trackerNo);
          formData.append('tenant_id', tenantId);
          formData.append('width', values.width);
          formData.append('height', values.height);
          formData.append('cost', values.cost);
          formData.append('LicenseImage', selectedLicenseFile.split(',')[1]);
          formData.append('approved', 'false');
          formData.append(
            'inspectionImage',
            selectedInspectionFile.split(',')[1]
          );

          try {
            const res = await addVehicle(formData);
            console.log('res', res);
            if (res.status === 200 || res.status === 201) {
              navigate('/vehiclesGarage');
              show('Vehicle added successfully: ');
            }
          } catch (error) {
            show(`Error: ${error}`, 'error');
          }

          setSubmitting(false);
        }}
      >
        {({}) => (
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
                    src={selectedFile || profileImage}
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
                    accept=".png,.jpeg,.jpg"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => setSelectedFile(reader.result);
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
                      mb: 2,
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
                      mb: 2,
                    }}
                  >
                    <Box>
                      <Field
                        as={TextField}
                        label={'Width'}
                        placeholder={'sq ft'}
                        name={'width'}
                      />
                      <ErrorMessage
                        name="width"
                        render={(msg) => (
                          <Typography sx={{ color: 'red' }}>{msg}</Typography>
                        )}
                      />
                    </Box>
                    <Box>
                      <Field
                        as={TextField}
                        label={'Height'}
                        placeholder={'sq ft'}
                        name={'height'}
                      />
                      <ErrorMessage
                        name="height"
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
                        label={'Cost'}
                        placeholder={'Cost per km'}
                        name={'cost'}
                      />
                      <ErrorMessage
                        name="cost"
                        render={(msg) => (
                          <Typography sx={{ color: 'red' }}>{msg}</Typography>
                        )}
                      />
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        mt: 3,
                      }}
                    >
                      <Box
                        sx={{
                          width: '340px',
                          height: '50px',
                          borderRadius: '43px',
                          position: 'relative',
                          cursor: 'pointer',
                          backgroundColor: 'green',
                        }}
                        onClick={handleLicenseDivClick}
                      >
                        <img
                          src={selectedLicenseFile || profileImage}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '10px',
                          }}
                          alt="Profile"
                        />
                        <div
                          style={{
                            position: 'absolute',
                            backgroundColor: '#000000B2',
                            top: '0px',
                            width: '100%',
                            height: '100%',
                            borderRadius: '10px',
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
                              <Typography
                                sx={{ color: 'white', textAlign: 'center' }}
                              >
                                Click to upload Vehicle Document
                              </Typography>
                            </div>
                          </div>
                        </div>
                        <input
                          ref={licenseFileInputRef}
                          id="license-file"
                          name="license-file"
                          type="file"
                          className="hidden"
                          style={{ display: 'none' }}
                          accept=".png,.jpeg,.jpg"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            if (file) {
                              const extension = file.name
                                .split('.')
                                .pop()
                                .toLowerCase();
                              if (
                                extension === 'png' ||
                                extension === 'jpeg' ||
                                extension === 'jpg'
                              ) {
                                const reader = new FileReader();
                                reader.readAsDataURL(file);
                                reader.onload = () =>
                                  setSelectedLicenseFile(reader.result);
                              } else {
                                // Show error message or handle invalid file type
                                console.error(
                                  'Invalid file type. Only PNG and JPEG files are accepted.'
                                );
                              }
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
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 2,
                    }}
                  >
                    <Box></Box>
                    <Box
                      sx={{
                        display: 'flex',
                        mt: 3,
                      }}
                    >
                      <Box
                        sx={{
                          width: '340px',
                          height: '50px',
                          borderRadius: '43px',
                          position: 'relative',
                          cursor: 'pointer',
                          backgroundColor: 'green',
                        }}
                        onClick={handleInspectionDivClick}
                      >
                        <img
                          src={selectedInspectionFile || profileImage}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '10px',
                          }}
                          alt="Profile"
                        />
                        <div
                          style={{
                            position: 'absolute',
                            backgroundColor: '#000000B2',
                            top: '0px',
                            width: '100%',
                            height: '100%',
                            borderRadius: '10px',
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
                              <Typography
                                sx={{ color: 'white', textAlign: 'center' }}
                              >
                                Click to upload Inspection Document
                              </Typography>
                            </div>
                          </div>
                        </div>
                        <input
                          ref={inspectionFileInputRef}
                          id="inspection-file"
                          name="inspection-file"
                          type="file"
                          className="hidden"
                          style={{ display: 'none' }}
                          accept=".png,.jpeg,.jpg"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            if (file) {
                              const extension = file.name
                                .split('.')
                                .pop()
                                .toLowerCase();
                              if (
                                extension === 'png' ||
                                extension === 'jpeg' ||
                                extension === 'jpg'
                              ) {
                                const reader = new FileReader();
                                reader.readAsDataURL(file);
                                reader.onload = () =>
                                  setSelectedInspectionFile(reader.result);
                              } else {
                                // Show error message or handle invalid file type
                                console.error(
                                  'Invalid file type. Only PNG and JPEG files are accepted.'
                                );
                              }
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
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      mt: 3,
                    }}
                  >
                    <CustomButton
                      role={'secondary'}
                      onClick={() => navigate('/driversgarage')}
                      customStyle={{ width: '10rem' }}
                    >
                      Cancel
                    </CustomButton>
                    <CustomButton
                      type="submit"
                      role={'primary'}
                      customStyle={{ width: '10rem', marginLeft: '1rem' }}
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
