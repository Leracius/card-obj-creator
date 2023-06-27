import { styled } from 'styled-components';
import { Form as FormStyled } from 'formik';

const cardBaseStyles = `
    border-radius: 10px;
    background-color: #201E50;
`;

export const CardContainer = styled.div`
    ${cardBaseStyles}
    padding: 30px;
    display: flex;
    border: 10px solid #201E50;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        padding: 10px;
    }
`;

export const Card = styled.div`
    ${cardBaseStyles}
    width: 360px;
    height: 460px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

    h1 {
        font-size: 26px;
        color: #C4F1BE;
    }

    h4 {
        font-size: 14px;
        color: #A2C3A4;
        margin: 0;
    }
`;

export const CardLeft = styled(Card)`
    background-color: #525B76;
`;

export const CardElStyled = styled.div`
    width: 95%;
    height: 75%;
    background-color: #201E50;
 
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    margin-bottom: 5px;

    &::-webkit-scrollbar {
        background-color: #657091;
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #C4F1BE;
        border-radius: 1px;
    }
`;

export const CardFlex = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const CardRight = styled(Card)`
    display: flex;
    flex-direction: column;
    margin-right: 3rem;
    @media screen and (max-width: 767px) {
        margin: 30px 0 30px 0;
    }
`;

export const Form = styled(FormStyled)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


