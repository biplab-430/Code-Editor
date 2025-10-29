import React,{useContext} from 'react'
import Editor from './Editor'
import {Box,styled} from '@mui/material'
import { DataContext } from '../Context/DataProvider';

const Container = styled(Box)`
  display: flex;
  background-color:#060606
  height:50vh
`;


function Code() {
    const{ Html,
        setHtml,
        css,
        setCss,
        js,
        setJs }=useContext(DataContext)
  return (
  <Container>
  <Editor heading='HTML' icon='/' color='red ' value={Html} onChange={setHtml}/>
  <Editor  heading='CSS' icon='*'color='yellow' value={css} onChange={setCss}/>
  <Editor  heading='JAVASCRIPT' icon='()' color='blue'  value={js} onChange={setJs}/>
  </Container>
  )
}

export default Code
