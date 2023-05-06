import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
    const ContactNo = "9863211795"

    return (
        <Box sx={{ pt: 0, mt: 0 }} className="">
            <Container maxWidth="xl" fixed sx={{ pt: 0, mt: 0, }}>
                <Grid container>
                    <Grid item sm={6}>
                        <Box sx={{ pt: 0, mt: 0 }}>
                            <Typography align="left" sx={{ pt: 0, mt: 0 }} textAlign={"left"} className='cursive-font'>
                                Want Help Contact us?{" "}
                                <span>
                                    {ContactNo}
                                </span>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={6} sx={{ display: "flex-end" }}>
                        <Box sx={{ pt: 0, mt: 0 }}>
                            <Typography align="left" sx={{ pt: 0, mt: 0 }} textAlign={"right"}>

                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Header