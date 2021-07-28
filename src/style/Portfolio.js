import styled from 'styled-components'

export const Folio = styled.div`
    width: 100%;
    background-color: #0d0d0d;
    color: white;
`

export const Title = styled.h2`
    text-align: ${props => props.nc ? '' : 'center'};
    font-size: 40px;
    text-transform: uppercase;
    opacity: 0.9;
    padding: 15px 0 15px 0;
`

export const Box = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

export const Card = styled.div`
    width: 50%;
    text-align: center;
    padding: 10px 0;

    & > p {
        display: none
    }

    @media(max-width: 1600px) {
        width: 50%;
    }

    @media(max-width: 960px) {
        width: 100%;
    }

`

export const Image = styled.img`
    width: 80%;
    transition: 1s all;

    &:hover {
        background-color: black;
        opacity: 0.5;
    }

    @media(max-width: 960px) {
        width: 100%;
    }

`

export const Text = styled.p`
    
`