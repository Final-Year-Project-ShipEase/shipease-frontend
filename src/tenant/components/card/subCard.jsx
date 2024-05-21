import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

const SubCard = ({ content, count, data }) => {
  const [isIncreasing] = useState(true);
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: '100%',
        height: 100,
        borderRadius: 3,
        marginBottom: 1,
        marginTop: '-30px',
        marginRight: '10px',
      }}
    >
      <CardContent
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '-10px',
        }}
      >
        <Typography sx={{ fontWeight: 'bold', fontSize: 12 }}>
          {content}
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {isIncreasing ? (
              <>
                <ArrowCircleUpRoundedIcon
                  sx={{
                    color: theme.palette.secondary.main,
                    width: 30,
                    height: 29,
                  }}
                />
                <Typography
                  sx={{
                    width: 25,
                    height: 20,
                    fontWeight: 'bold',
                    fontSize: '10px',
                    color: theme.palette.secondary.main,
                  }}
                >
                  +{Math.abs((count * 6) / (count - 3))}%
                </Typography>
              </>
            ) : (
              <>
                <ArrowCircleDownRoundedIcon
                  sx={{
                    color: theme.palette.primary.main,
                    width: 30,
                    height: 29,
                  }}
                />
                <Typography
                  sx={{
                    width: 25,
                    height: 20,
                    fontWeight: 'bold',
                    fontSize: '10px',
                    color: theme.palette.primary.main,
                  }}
                >
                  -{Math.abs(count)}%
                </Typography>
              </>
            )}
          </div>
        </div>
      </CardContent>

      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '-60px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              width: '100%',
              fontWeight: 'bold',
              fontSize: '25px',
              color: theme.palette.text.secondary,
            }}
          >
            {count}
          </Typography>
        </div>

        <ResponsiveContainer width={250} height={120}>
          <LineChart data={data}>
            <Tooltip />
            <Line
              type="monotoneX"
              dataKey="users"
              stroke={
                isIncreasing
                  ? theme.palette.secondary.main
                  : theme.palette.primary.main
              }
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SubCard;
