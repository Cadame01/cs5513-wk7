// note from Ethan: import '@/' not working properly in replit workspaces

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
return (
<ChakraProvider>
<Component {...pageProps} />
</ChakraProvider>
);
}
export default MyApp;