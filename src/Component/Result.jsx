import React, { useContext,useState,useEffect } from 'react'
import { Box, styled } from '@mui/material'

import { DataContext } from '../Context/DataProvider';

const Container=styled(Box)`
   height:41vh;
`


function Result() {
 
    const[src,setSrc]=useState('')

    const { Html,css,js,
    } = useContext(DataContext)


    const srcCode = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>${Html}</body>
      <script>${js}</script>
    </html>
  `;
useEffect(()=>{
   const TimeOut=setTimeout(() => {
     setSrc(srcCode)
   }, 1000);
   return()=>clearTimeout(TimeOut);
},[Html,css,js,])

    return (


        <Container>
            <iframe srcDoc={src} title='output' sandbox='allow-scripts' frameBorder={0} width='100%'height='100%'/>
        </Container>
    )
}

export default Result
