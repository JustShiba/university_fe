import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary, Button, Input } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SomePage = () => {
  const [logarithm, setLogarithm] = useState(0);
  const [number, setNumber] = useState(0);
  const [ipData, setIpData] = useState({
    continentCode: '',
    continentName: '',
    countryCode: '',
    countryName: '',
    ipAddress: '',
  });
  const [googleSearch, setGoogleSearch] = useState('');
  const [mapSearch, setMapSearch] = useState('');
  const [currencies, setCurrencies] = useState({});

  const getIp = async () => {
    const { data: {
      continentCode,
      continentName,
      countryCode,
      countryName,
      ipAddress,
    } } = await axios.get('https://api.db-ip.com/v2/free/self');

    setIpData({
      continentCode,
      continentName,
      countryCode,
      countryName,
      ipAddress,
    });
  };

  const getCurrency = async () => {
    // eslint-disable camelcase
    let cur = {};
    const { data: { Cur_OfficialRate: USD } } = await axios.get('https://www.nbrb.by/api/exrates/rates/USD?parammode=2');
    const { data: { Cur_OfficialRate: EUR } } = await axios.get('https://www.nbrb.by/api/exrates/rates/EUR?parammode=2');
    const { data: { Cur_OfficialRate: RUB } } = await axios.get('https://www.nbrb.by/api/exrates/rates/RUB?parammode=2');
    cur = { USD, EUR, RUB };
    setCurrencies(cur);
  };

  return (
    <div style={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5">Logarithm:</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'flex' }}>
              <Typography variant="h5">lg(</Typography>
              <Input
                value={number}
                onChange={(e) => {
                  if (Number(e.target.value) || e.target.value === '') setNumber(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.code === 'Enter') {
                    setLogarithm(Math.log10(number));
                  }
                }}
                onBlur={() => setLogarithm(Math.log10(number))}
              />
              <Typography variant="h5">
                ) =&nbsp;
                {logarithm}
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5">IP Address: </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button style={{ marginBottom: '20px' }} onClick={getIp} variant="contained">Press button to get IP address</Button>
            {ipData.ipAddress && Object.keys(ipData).map((item) => (
              <div key={item} style={{ display: 'flex' }}>
                <Typography variant="h6">
                  {item}
                  :
                  {ipData[item]}
                </Typography>
              </div>
            )) }
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5">Google search:</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ marginBlockEnd: 0 }} variant="h6">Regular search: </Typography>
              <Input
                value={googleSearch}
                onChange={(e) => setGoogleSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.code === 'Enter') {
                    window.open(`https://www.google.com/search?q=${googleSearch}`, '_blank');
                  }
                }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ marginBlockEnd: 0 }} variant="h6">Maps search: </Typography>
              <Input
                value={mapSearch}
                onChange={(e) => setMapSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.code === 'Enter') {
                    window.open(`https://www.google.com/maps?q=${mapSearch}`, '_blank');
                  }
                }}
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5">Currencies: </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button style={{ marginBottom: '20px' }} onClick={getCurrency} variant="contained">Press button to get currencies</Button>
            {currencies && Object.keys(currencies).map((item) => (
              <div key={item} style={{ display: 'flex' }}>
                <Typography variant="h6">
                  {item}
                  :
                  {currencies[item]}
                </Typography>
              </div>
            )) }
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default SomePage;
