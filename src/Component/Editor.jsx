import React,{useState} from "react";
import { Box, styled, Typography } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlEditor } from "react-codemirror2";
import "../index.css";
import LocalStorage from "../Hooks/LocalStorage";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";


const Container = styled(Box)`
    flex-grow:1;
    flex-basics:0;
    display:flex;
    flex-direction:column;
    padding:0px 8px 8px;
`;

const Heading = styled(Box)`
  background-color: #1d1e22;
  display: flex;
  align-items: center;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  background-color: #060606;
  color: #AAAEBC;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;

function Editor({ heading, icon, color,value,onChange }) {
  const[open,setopen]=useState(true)

    const handleChange=(editor,data,value)=>{
        onChange(value);
    }
  return (
    <Container style={open? null:{flexGrow:0}}>
      <Header>
        <Heading>
          {/* Colored Box (Red, Blue, Yellow) */}
          <Box
            component="span"
            sx={{
              background: color,
              height: 20,
              width: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              marginRight: 1,
            }}
          />
          {/* Black Icon */}
          <Typography
            component="span"
            sx={{
              color: "#000",
              fontSize: "18px",
              margin: "0 8px",
              fontWeight: "bold",
            }}
          >
            {icon}
          </Typography>
          {/* Heading Text */}
          <Typography component="span">{heading}</Typography>
        </Heading>
        <CloseFullscreenIcon 
         onClick={()=>setopen(prevState=>!prevState)

        }
        />
      </Header>

      {/* CodeMirror Editor */}
      <ControlEditor
        className="Control-Editor"
         value={value}
         onBeforeChange={handleChange}
        options={{
          theme: "material",
          lineNumbers: true,
        }}
      />
    </Container>
  );
}

export default Editor;
