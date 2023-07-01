import { styled , css } from "styled-components";

export const CardEl = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    gap: 10px;
    padding: 10px;
    background-color: #181818;
    position: fixed;
    right: 37%;
    top: 80px;
    @media screen and (max-width: 767px) {
        right: 50px;
        top: 20px;
    }
    cursor: pointer;
      
    div{
        width: 100%;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
    }
    p{
        font-weight: 700;
    }
    form{
        width: 100%;
        height: 100%;
        display: flex;
        gap: 10px;
        flex-direction: column;
    }
`
export const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    color: #C4F1BE;
`

export const InputStyled = styled.input`
    border: none;
    padding: 5px;
    font-size: 14px;
    background-color: #242424;
`