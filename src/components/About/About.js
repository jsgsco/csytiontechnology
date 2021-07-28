import { About as AboutMe, Logo, Info } from '../../style/AboutStyle'
import { Container } from '../../style/Container'
import image from '../../images/logo.png'
import { Title } from '../../style/Portfolio'

export const About = () => {
    return(
        <AboutMe>
            <Container dflex>
                <Logo 
                    src={image}
                    alt="Csytion Technology S.A.S"
                    title="Csytion Technology S.A.S"
                />
                <Info>
                    <Title nc>
                        ¿Quienes Somos?
                    </Title>
                </Info>
            </Container>
        </AboutMe>
    )
}