"use client"
import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import { useState } from 'react';
import { signIn } from 'next-auth/react';


export default function Signin () {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[confirmpassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');



  const handleSubmit = async (e:any) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/authsignup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname, lastname, email, password, username, mobile, confirmpassword})
      });
      if (response.ok) {
       console.log('Response: logeed');
       const responseData = await response.json(); 
       const { message, dtp } = responseData;
       alert(`User registered successfully!\nDTP code: ${dtp}`);
        const form = e.target;

        form.reset();

        
      } else {
        const result = await response.json();
        setError(result.message || 'Sign up failed for an unknown reason');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setError('Sign up failed for an unknown reason');
    }
  


  }
  
  

   

  return (
    <>
      
    
      <Box
        bgcolor=" rgb(3 7 18) "
      >
        <Box
       sx={{
        backgroundImage: 'url("/Group 1000000908.png")' ,
        backgroundSize: 'fit',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
        >
          <Box
            component="header"
            sx={{
              py: 3,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            
          </Box>

            
          <Box
            component="main"
            sx={{
              my: 'auto',
              py: 2,
              pb: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: 400,
              maxWidth: '100%',
              mx: 'auto',
              borderRadius: 'sm',
              '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              },
              [`& .MuiFormLabel-asterisk`]: {
                visibility: 'hidden',
              },
            }}
          >
            <Stack gap={4} sx={{ mb: 2 }}>
              <Stack gap={1}>
                <div className=' text-[40px]  align w-full  text-center pb-10 font-bold' style={{ color: 'white'  }}>
               Add New Admin
                </div>

              
              </Stack>
           
            </Stack>
            <Divider
            
            >
           
            </Divider>
            <Stack gap={4} sx={{ mt: 2 }}>
              <form onSubmit={handleSubmit}
                 
              >


                

                <FormControl ><h4></h4>
                  <FormLabel style={{ color: 'white' }}>First Name</FormLabel>
                  <Input type="text" name="firstname"  onChange={(e)=>setFirstname(e.target.value)}/>
                </FormControl>

                <FormControl required>
                  <FormLabel style={{ color: 'white' }}>Last Name</FormLabel>
                  <Input type="text" name="lastname" onChange={(e)=>setLastname(e.target.value)} />
                </FormControl>

                <FormControl required>
                  <FormLabel style={{ color: 'white' }}>User Name</FormLabel>
                  <Input type="text" name="username" onChange={(e)=>setUsername(e.target.value)} />
                </FormControl>

                <FormControl required>
                  <FormLabel style={{ color: 'white' }}>Mobile Number</FormLabel>
                  <Input type="text" name="mobile" onChange={(e)=>setMobile(e.target.value)} />
                </FormControl>

                <FormControl required>
                  <FormLabel style={{ color: 'white' }}>Email</FormLabel>
                  <Input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} />
                </FormControl>

                <FormControl required>
                  <FormLabel style={{ color: 'white' }}>Admin Type</FormLabel>
                  <Input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                </FormControl>
                
                <FormControl required>
                  <FormLabel style={{ color: 'white' }}>Password</FormLabel>
                  <Input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                </FormControl>


                <FormControl required>
                  <FormLabel style={{ color: 'white' }}>Confirm Password</FormLabel>
                  <Input type="password" name="confirmpassword" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </FormControl>






                {error && <Typography color="danger" sx={{ mt: 1 }}>{error}</Typography>}
                <Stack gap={4} sx={{ mt: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Checkbox size="sm" style={{ color: 'white' }}  label="Remember me" name="persistent" />
                    <Link level="title-sm" href="#replace-with-a-link">
                      Forgot your password?
                    </Link>
                  </Box>
                  <Button type="submit" fullWidth>
                   User add
                  </Button>
                </Stack>
                
              </form>
            </Stack>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" textAlign="center">
              © Our company {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
     </>
  );
}