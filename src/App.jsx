import { StyledHeader } from "./setup/styled-components/styled_component";
import GlobalStyle from "./setup/styled-components/GlobalStyle";
import { isBrowser, isMobile } from "react-device-detect";
function App() {
        return (
                <>
                        <GlobalStyle />
                        <StyledHeader>
                                {isMobile && (
                                        <input
                                                type='checkbox'
                                                className='menu'
                                                name='menu-open'
                                                aria-label='Menu'
                                        />
                                )}
                                <img
                                        src='icons/logo.svg'
                                        alt='Audiophile logo'
                                        className='logo'
                                />
                                {isBrowser && (
                                        <>
                                                <nav>
                                                        <ul>
                                                                <li tabIndex={0}>HOME</li>
                                                                <li tabIndex={0}>
                                                                        HEADPHONES
                                                                </li>
                                                                <li tabIndex={0}>
                                                                        SPEAKERS
                                                                </li>
                                                                <li tabIndex={0}>
                                                                        EARPHONES
                                                                </li>
                                                        </ul>
                                                </nav>
                                        </>
                                )}
                                <button className='cartContainer'>
                                        <img
                                                src='icons/icon-cart.svg'
                                                alt='cart icon'
                                                className='cart'
                                        />
                                        <span className='cartCount'>3</span>
                                </button>
                        </StyledHeader>
                </>
        );
}

export default App;
