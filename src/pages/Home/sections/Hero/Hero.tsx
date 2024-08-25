import { Button, Container, Grid, styled, Typography } from "@mui/material"
import Pingu from "../../../../assets/images/download.jfif"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "blueviolet",
        height: "100vh"
    }))
    const StyledImage = styled("img")(() => ({
        width: "80%",
        borderRadius: "20%",

    }))
    return (
        <>

            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <StyledImage src={Pingu}></StyledImage>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h1" textAlign="center">Pingu Roliço</Typography>
                            <Typography variant="h2" textAlign="center">Infinite Bulking</Typography>
                            <Grid container display="flex" justifyContent="center">
                                <Grid item xs={12} md={3} display="flex" justifyContent="center">
                                    <Button>
                                        <DownloadIcon />
                                        Baixa ai
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={3} display="flex" justifyContent="center">
                                    <Button>
                                        <EmailIcon />
                                        Fala co pai
                                    </Button>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>

        </>
    )
}

export default Hero
