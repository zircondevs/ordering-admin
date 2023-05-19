import "../styles/globals.css";
import "../styles/toastr.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../config/theme";
import Head from "next/head";
import React from "react";
import { ProviderContext } from "../state/provider";
import ErrorBoundary from "../components/ErrorBoundary";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ProviderContext>
			<ErrorBoundary>
				<ThemeProvider theme={theme}>
					<Head>
						<title>Findeet home</title>
						<meta name="viewport" content="initial-scale=1.0, width=device-width" />
						<meta name="description" 
							content={`A school management system that provides 100% 
							what you need for your childs schooling.`}
						/>
						<link rel="icon" href="/favicon.ico" />
						<link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png"></link>
						<link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png"></link>
						<link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png"></link>
						<link rel="manifest" href="../public/site.webmanifest"></link>
					</Head>
					<Component {...pageProps} />
				</ThemeProvider>
			</ErrorBoundary>
		</ProviderContext>
	);
}

export default MyApp;
