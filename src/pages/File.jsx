import { Button, ButtonGroup, Input } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { toast } from 'react-toastify';

const FilePage = () => {
  const [email, setEmail] = useState('email@gmail.com');
  const [password, setPassword] = useState('YourStr0ngPass!');
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem('apiKey'));
  const [file, setFile] = useState();
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const login = () => {
    axios.post('https://universityapi-production.up.railway.app/login', {
      email, password,
    }).then(({ data }) => {
      localStorage.setItem('apiKey', data.response.apiKey);
      toast.success('Logged In');
      setIsLogin(true);
    });
  };

  const sendFile = async () => {
    if (!file) return toast.error('No file selected');
    const formData = new FormData();
    formData.append('file', file);
    try {
      const { data } = await axios.post('https://universityapi-production.up.railway.app/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (data.status === 201) {
        setFiles([...files, data.response]);
        toast.success('File added');
      }
    } catch {
      toast.error('Something went wrong');
    }
  };

  const deleteFile = async (fileName) => {
    const { data } = await axios.delete(`https://universityapi-production.up.railway.app/${fileName}`);
    if (data.status === 201) {
      const arr = [...files];
      arr.splice(files.indexOf(fileName), 1);
      setFiles(arr);
      toast.success('File deleted');
    } else {
      toast.error('Something went wrong');
    }
  };

  useState(() => {
    setIsLoading(true);
    axios.get('https://universityapi-production.up.railway.app/files')
      .then(({ data: { response } }) => {
        setFiles(response);
        setIsLoading(false);
      })
      .catch(() => toast.error('Something went wrong'));
  }, []);

  return (
    <>
      <div style={{ width: '40%', display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4">Login:</Typography>
        <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button variant="outlined" onClick={login}>Log in</Button>
      </div>
      <div
        style={{ width: '30%',
          marginTop: '120px',
          display: 'flex',
          flexDirection: 'column',
          pointerEvents: isLogin ? 'auto' : 'none',
        }}
      >
        <Typography style={{ alignSelf: 'center' }} variant="h4">
          Logged in:&nbsp;
          {isLogin ? 'true' : 'false'}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignSelf: 'center', marginTop: '50px' }} className="add_purchase_inputs">
          <Input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </div>
        <ButtonGroup style={{ display: 'flex', marginTop: '20px', alignSelf: 'center' }} variant="outlined" aria-label="large button group">
          <Button onClick={sendFile}>
            Send file
          </Button>
        </ButtonGroup>
        {isLoading ? (
          <Typography>Loading</Typography>
        )
          : (
            <div style={{ marginTop: '50px' }}>
              {files.map((item) => (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }} key={item}>
                  <Typography style={{ textAlign: 'left' }}>{item}</Typography>
                  <Button color="error" variant="contained" onClick={() => deleteFile(item)}>
                    Delete file
                  </Button>
                </div>
              ))}
            </div>
          )}
      </div>
    </>

  );
};

export default FilePage;
