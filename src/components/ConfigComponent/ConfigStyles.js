import { styled } from "styled-components";

export const CardEl = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    gap: 10px;
    padding: 10px;
    background-color: #201E50;
    position: fixed;
    right: 20px;
    bottom: 20px;
    div{
        width: 100%;
    }
    p{
        font-weight: 700;
    }
    form{
        display: flex;
        gap: 10px;
        flex-direction: column;
    }
        @media screen and (max-width: 767px) {
        border: 2px solid #C4F1BE;
    }
`
export const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    color: #C4F1BE;
`