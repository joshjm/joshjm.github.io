import styled from 'styled-components';

export const ButtonPrimary = styled.button`
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #333;
    }
    &:active {
        background-color: #666;
    }
`;
