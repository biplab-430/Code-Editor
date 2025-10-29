import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
  background-color: black;
  height=9vh;
`;

function Header() {
  return (
    <>
    <Container position="static">
        <Toolbar>
            yup
        </Toolbar>
      </Container>
    </>
  );
}

export default Header;

