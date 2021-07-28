import { Slide, TextCite, TextAuthor } from "../../style/SliderStyle"
import { Container } from '../../style/Container'

export const Slider = () => {
    return(
        <Slide>
            <Container author>
                <TextCite>Se que parece que el mundo se esta desmoronando,pero en realidad es una gran epoca para volvernos un poco, segui nuestra curiosidad y ser ambiciosos. No abandoneis vuestros sueños. ¡El mundo os necesita!</TextCite>
                <TextAuthor>- Larry Page</TextAuthor>
            </Container>
        </Slide>
    )
}