import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import busImage from '../../../resources/image 2.png';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../../utils/spinner';
import AddIcon from '@mui/icons-material/Add';
import PageHeader from '../pageHeader';
import { useVehicleService } from '../../../../services/vehicleServices';
import VehicleImage from '../../driversGarage/components/vehicleImage';
import { Lightbox } from 'react-modal-image';

const VehiclesDetails = ({ tenantId, onSearch }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getVehicle } = useVehicleService();
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [inspectionReport, setInspectionReport] = useState(null);
  const [inspectionReportData, setInspectionReportData] = useState(null);
  const [isInspectionReportOpen, setIsInspectionReportOpen] = useState(false);

  const openInspectionReport = () => {
    const base64String = btoa(
      String.fromCharCode(...new Uint8Array(inspectionReportData?.data))
    );
    const base64Image = `data:image/png;base64,${base64String}`;
    setInspectionReport(base64Image);
    setIsInspectionReportOpen(true);
  };

  const closeInspectionReport = () => {
    setIsInspectionReportOpen(false);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const openLightbox = () => {
    const base64String = btoa(
      String.fromCharCode(...new Uint8Array(imageData?.data))
    );
    const base64Image = `data:image/png;base64,${base64String}`;
    setImage(base64Image);
    setIsOpen(true);
  };

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        setLoading(true);
        const response = await getVehicle(tenantId);
        setVehicle(response);
        setImageData(response.LicenseImage);
        setInspectionReportData(response.inspectionImage);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchVehicle();
  }, [tenantId]);

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.primary.backgroundColor,
        width: '100%',
        height: '330px',
        borderRadius: '10px',
      }}
    >
      {isOpen && vehicle.LicenseImage ? (
        <Lightbox large={image} onClose={closeLightbox} alt="Vehicle Image" />
      ) : null}
      {isInspectionReportOpen && vehicle.inspectionImage ? (
        <Lightbox
          large={inspectionReport}
          onClose={closeInspectionReport}
          alt="Inspection Report"
        />
      ) : null}
      {loading && <Spinner />}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '96%',
          marginLeft: '5%',
          height: '6%',
          marginLeft: '25px',
          marginTop: '35px',
        }}
      >
        <PageHeader onSearch={onSearch} />
      </Box>
      <Grid container spacing={2} sx={{ mt: '2%', ml: '5%' }}>
        <Grid item xs={3}>
          <Box
            sx={{
              width: '100px',
              height: '100px',
            }}
          >
            {vehicle.image ? (
              <VehicleImage image={vehicle.image} />
            ) : (
              <img
                style={{ borderRadius: '5px', height: '200px', width: '200px' }}
                src={busImage}
                alt="Bus"
              />
            )}
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'left',
            }}
          >
            <Grid
              sx={{
                marginTop: '20px',
              }}
            >
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '20px' }}
              >
                Registration No: {vehicle?.regNo || 'Trucker Trailer'}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '5px',
              marginLeft: '-60px',
            }}
          >
            <Grid
              item
              xs={8}
              sx={{
                marginTop: '-20px',
              }}
            >
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '20px' }}
              >
                ID: {vehicle?.id || 'D-321'}
              </Typography>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
              >
                Types:{' '}
                {vehicle?.type
                  ? vehicle?.type.map((city) => city).join(', ')
                  : 'R-321'}
              </Typography>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
              >
                Tracker No: {vehicle?.trackerNo || 'T-321'}
              </Typography>
              <Typography
                sx={{ color: theme.palette.buttons.main, fontSize: '16px' }}
              >
                Location: {vehicle?.location || 'NewYork'}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: '-290px',
              }}
            >
              <Grid>
                <Typography
                  sx={{ color: theme.palette.buttons.main, fontSize: '20px' }}
                >
                  Owner Cnic :{vehicle?.ownerCnic || '333-0285351821'}
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.buttons.main,
                    fontSize: '16px',
                    marginTop: '10px',
                  }}
                >
                  Original Document:{' '}
                  <Button
                    startIcon={<AddIcon />}
                    variant="contained"
                    color="secondary"
                    style={{ marginLeft: '20px', borderRadius: '5px' }}
                    onClick={openLightbox}
                  >
                    Vehicle Document
                  </Button>
                </Typography>

                <Typography
                  sx={{
                    color: theme.palette.buttons.main,
                    fontSize: '16px',
                    marginTop: '10px',
                  }}
                >
                  Inspection Report:{' '}
                  <Button
                    startIcon={<AddIcon />}
                    variant="contained"
                    color="secondary"
                    style={{
                      marginTop: '10px',
                      marginLeft: '30px',
                      borderRadius: '5px',
                    }}
                    onClick={openInspectionReport}
                  >
                    Inspection Report
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default VehiclesDetails;
