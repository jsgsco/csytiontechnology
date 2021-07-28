import styled from 'styled-components'

export const Container = styled.div`
    width: ${props => props.author ? '60%' : '80%'};
    margin: auto;
    margin-top: ${props => props.mt ? '10px' : ''};
    display: ${props => props.dflex ? 'flex' : ''};
    justify-content: ${props => props.dflex ? 'space-evenly' : ''};
    align-items: ${props => props.dflex ? 'center' : ''};

    @media(max-width: 960px) {
        width: 90%;
    }
`