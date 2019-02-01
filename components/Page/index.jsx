import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from '../Meta/index';

const theme = {
    red: '#FF0000'
}

const GlobalStyle = createGlobalStyle``;

const StyledPage = styled.div``;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <GlobalStyle />
                    {this.props.children}
                </StyledPage>
            </ThemeProvider>
        )
    }
}

export default Page;