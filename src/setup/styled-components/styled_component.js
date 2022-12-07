import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
        background-color: var(--color-primary);
        color: var(--color-white);
        height: 15vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid var(--color-gray-400);
        & .menu {
                height: 50px;
                width: 50px;
                appearance: none;
                background: url(/icons/icon-hamburger.svg) no-repeat left;
                /* if :checked change the background */
                &:checked {
                        background: url(/icons/icon-close-menu.svg) no-repeat
                                left;
                }
        }
        & .logo:hover {
                cursor: pointer;
        }
        & nav ul {
                display: flex;
                gap: 1.5rem;
                letter-spacing: 0.125em;
                & li{
                        border: 3px dotted transparent;
                        outline:none;
                        padding:3px;
                }
                & li:hover,
                & li:focus {
                        cursor: pointer;
                        color: var(--color-secondary);
                        transition: all 0.3s ease-in-out;
                        border: 3px dotted red;
                }
        }
        & .cartContainer {
                width: 50px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: transparent;
                outline: none;
                /* border: none; */
                border: 3px dotted transparent;

                position: relative;
                & .cart {
                        /* background-color:red; */
                }
                & .cart:hover {
                        cursor: pointer;
                }
                &:hover,
                &:focus {
                        color: var(--color-secondary);
                        transition: all 0.3s ease-in-out;
                        border: 3px dotted red;
                }
                & .cartCount {
                        position: absolute;
                        top: -3px;
                        right: -3px;
                        background-color: var(--color-secondary);
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 0.8rem;
                        color:white;
                }
        }
`;
