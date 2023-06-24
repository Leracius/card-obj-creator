import { styled } from 'styled-components';

export const CardContainer = styled.div`
    border-radius: 10px;
    background-color: #201E50;
    display: flex;
    border: 10px solid #201E50;
    @media screen and (max-width: 767px) {
        flex-direction: column-reverse;
    }
`
export const Card = styled.div`
    width: 360px;
    height: 460px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    h1{
        font-size: 26px;
        color: #C4F1BE;
    }h4{
        font-size: 14px;
        color: #A2C3A4;
        margin: 0;
    }
`
export const CardLeft = styled(Card)`
    background-color: #525B76;
    border-radius: 10px;
`
export const CardElStyled = styled.div`
    width: 95%;
    height: 75%;
    background-color: #201E50;
    margin: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;

    &::-webkit-scrollbar {
    background-color: #657091;
    width: 5px;
    }
    
    &::-webkit-scrollbar-thumb {
    background-color: #C4F1BE;
    border-radius: 1px;
    }
`
export const CardFlex = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    /* div{
        margin: 5px;
        border: 2px solid #A2C3A4;
        width: 95%;
        height: 40px;
    } */
`
export const CardRight = styled(Card)`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

