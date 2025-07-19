import ScrollRestoration from "@/components/ScrollRestoration";
import { AppWrapper } from "@/context/AppContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { IntlProvider } from "react-intl";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider locale="id">
      <ScrollRestoration>
        <AppWrapper>
          <Head>
            <title>Suitmedia - Frontend Internship</title>
          </Head>
          <Component {...pageProps} />
        </AppWrapper>
        <ToastContainer />
      </ScrollRestoration>
    </IntlProvider>
  );
}
