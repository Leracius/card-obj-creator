import { styled } from 'styled-components';
import { Form as FormStyled } from 'formik';


const background: string = '#201E50'

const cardBaseStyles: string = `
    border-radius: 10px;
    background-color: ${background};
`;

export const CardContainer = styled.div`
    ${cardBaseStyles}
    display: flex;
    flex-direction: column;
    border: 10px solid ${background};

    @media screen and (max-width: 767px) {
        flex-direction: column;
        padding: 10px;
    }
`;

export const Card = styled.div`
    ${cardBaseStyles}

    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

    h1 {
        font-size: 32px;
        color: #C4F1BE;
        margin: 10px;
    }

    h4 {
        font-size: 14px;
        color: #A2C3A4;
        margin: 0;
    }
`;

export const CardLeft = styled(Card)`
    background-color: #525B76;
    position: fixed;
    padding: 10px;
    left: 37%;
    top: 80px;
    @media screen and (max-width: 767px) {
        left: 20px;
        top: 20px;
    }
    button{
        background-color: transparent;
    }
`;

export const CardElStyled = styled.div`
    background-color: #201E50;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    margin-bottom: 5px;
    padding: 20px;

    &::-webkit-scrollbar {
        background-color: #657091;
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #C4F1BE;
        border-radius: 1px;
    }

`;

export const CardElStyled2 = styled.div`
    background-color: #201E50;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    margin: 5px;

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
    width: 250px;
    height: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5px;
`;

export const CardRight = styled(Card)`
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 460px;
    padding: 20px;
    @media screen and (max-width: 767px) {
        margin: 30px 0 30px 0;
    }
`;

export const Form = styled(FormStyled)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


