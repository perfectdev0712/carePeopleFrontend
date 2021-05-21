import React from 'react'
import { useSelector } from "react-redux";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { history } from "../../../../history"

export default function Header() {

    let isAuthorized = useSelector((state) => state.auth.isAuth);

    return (
        <AppBar position="static" className="header-app-bar">
            <Container>
                <Toolbar className="d-flex justify-content-between pt-1 pb-1">
                    <Box className="d-flex align-items-center crusor-pointer" onClick={() => history.push("/")}>
                        <Typography className="font-weight-bold color-white" variant="h4">
                            CarePeople
                        </Typography>
                    </Box>
                    <Box className="d-flex justify-content-right align-items-center">
                        {
                            !isAuthorized ? 
                                <>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Post Shifts</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Work Shifts</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">How it works</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Download</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">About Us</Button>
                                    <Button className="header-signup-item text-capitalize" variant="contained" onClick={() => history.push("/register")}>Sign Up</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Sign In</Button>
                                </>
                                 :
                                <>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Home</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Profile</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Documents</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">References</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Shifts</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Billings</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Faq</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Contact Us</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Refferal</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Setting</Button>
                                    <Button className="header-btn-item bg-transparent color-white text-capitalize" variant="contained">Sign Out</Button>
                                </>
                                
                        }
                    </Box>
                </Toolbar>

            </Container>
        </AppBar>
    )
}
