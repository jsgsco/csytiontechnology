import { Folio, Title, Box, Card, Image } from "../../style/Portfolio"
import { Container } from '../../style/Container'
import image from '../../images/portfolio/2.PNG'

export const Portfolio = () => {
    return(
        <Folio>
            <Title>Portafolio</Title>
            <Container>
                <Box>
                    <Card>
                        <Image 
                            src={image}
                            alt="Proyecto"
                        />
                    </Card>
                    <Card>
                        <Image 
                            src={image}
                            alt="Proyecto"
                        />
                    </Card>
                </Box>
            </Container>
        </Folio>
    )
}