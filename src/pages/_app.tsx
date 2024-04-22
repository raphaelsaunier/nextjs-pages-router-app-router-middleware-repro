import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { AppContext, AppProps } from "next/app";
import Layout from "@/components/Layout";

export type NextPageWithLayout<Props = any> = NextPage<Props> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  return <div>{getLayout(<Component {...pageProps} />)}</div>;
}
