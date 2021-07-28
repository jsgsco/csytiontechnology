import styled from 'styled-components'

export const Slide = styled.div`
    width: 100%;
    height: 300px;
    background-color: #111111;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width: 960px) {
        height: unset;
    }
`

export const TextAuthor = styled.h2`
    margin-top: 5px;
    font-size: 15px;

    @media(max-width: 960px) {
        font-size: 14px;
    }
`

export const TextCite = styled.p`
    font-size: 18px;

    @media(max-width: 960px) {
        font-size: 14px;
    }
`