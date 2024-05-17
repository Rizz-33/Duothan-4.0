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
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';

import { signIn } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';
export default function Signin () {

  const [username, SetUsername] = React.useState('');
  const [password, SetPassword] = React.useState('');  
  const [error, setError] = React.useState('');

  const haddlesubmitq =async (e:any) =>
    {
       e.preventDefault();

      try {
        const response= await fetch('http://localhost:5000/authadminlog',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({ username, password})

        });
        if (response.ok) {
          console.log('Response: logeed');
          window.location.href = 'http://localhost:3000/admin/overview';
        } 
        
        else {
          const result = await response.json();
        setError(result.message || 'Sign in failed for an unknown reason')
        }
      }
      catch(error){
        setError( 'Sign in failed for an unknown reason');
       
      
      }


    }
 

  return (
    <>
      
    
      <Box
      bgcolor=" rgb(3 7 18) "
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
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            width: '100%',
            px: 2,
          }}
        >
          <Box
           
            sx={{
              py: 3,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            
          </Box>

            
          <Box
            
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
                <div  style={{ color: 'white'  }}>
                Admin Login
                </div>

               
              </Stack>
             
            </Stack>
            <Divider
          
            >
              or
            </Divider>
            <Stack gap={4} sx={{ mt: 2 }}>
              <form onSubmit={haddlesubmitq}
               
                
              >
                <FormControl required>
                  <FormLabel style={{ color: 'white' }}>Username</FormLabel>
                  <Input type="text" name="username" onChange={(e)=>SetUsername(e.target.value)}/>
                </FormControl>

               

                <FormControl required>
                  <FormLabel style={{ color: 'white' }}>Password</FormLabel>
                  <Input type="password" name="password" onChange={(e)=>SetPassword(e.target.value)} />
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
                    <Checkbox size="sm" label="Remember me" name="persistent" style={{ color: 'white' }}/>
                    <Link level="title-sm" href="#replace-with-a-link">
                      Forgot your password?
                    </Link>
                  </Box>
                  <Button type="submit" fullWidth>
                    Sign in
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