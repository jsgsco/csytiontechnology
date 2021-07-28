import styled from 'styled-components'
import bg from '../images/1parallax.png'

export const Header = styled.header`
    width: 100%;
    height: 700px;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 960px) {
        height: 800px;
    }

`
export const TextBehind = styled.p`
    font-size: 130px;
    position: absolute;
    font-weight: 100;
    opacity: 0.2;
    font-family: Bungee Hairline;
    text-transform: uppercase;

    @media(max-width: 1600px) {
        font-size: 100px;
    }

    @media(max-width: 1200px) {
        font-size: 80px;
    }

    @media(max-width: 960px) {
        font-size: 70px;
    }

    @media(max-width: 840px) {
        font-size: 60px;
    }

    @media(max-width: 730px) {
        font-size: 50px;
    }

    @media(max-width: 600px) {
        font-size: 40px;
    }

    @media(max-width: 490px) {
        font-size: 30px;
        opacity: 0.5;
    }
`

export const Text = styled.p`
    font-size: 40px;
    text-transform: uppercase;
    opacity: 0.9;

    @media(max-width: 960px) {
        font-size: 35px;
    }

    @media(max-width: 840px) {
        font-size: 30px;
    }

    @media(max-width: 730px) {
        font-size: 25px;
    }

    @media(max-width: 600px) {
        font-size: 20px;
    }

    @media(max-width: 490px) {
        font-size: 15px;
    }
`