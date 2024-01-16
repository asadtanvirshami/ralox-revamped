import "@/styles/main.scss";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRouter, Router } from "next/router";
import { Fragment, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "@/components/shared/Layout/Layout";
import UserProvider from "@/components/layout/User/UserProvider";
import { Spinner } from "@nextui-org/react";

import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const queryClient = new QueryClient();

  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => setLoading(false));

  return (
    <>
      {router.pathname !== "/auth" && router.pathname !== "/" && (
        <Fragment>
          {loading ? (
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <Layout>
                  <div class="flex justify-center mt-5 gap-4">
                    <Spinner
                      className="h-96"
                      size="lg"
                      label="Loading..."
                      color="warning"
                    />
                  </div>
                </Layout>
              </PersistGate>
            </Provider>
          ) : (
            <QueryClientProvider client={queryClient}>
              <UserProvider>
                <Provider store={store}>
                  <PersistGate loading={null} persistor={persistor}>
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                  </PersistGate>
                </Provider>
              </UserProvider>
            </QueryClientProvider>
          )}
        </Fragment>
      )}
      {(router.pathname === "/" || router.pathname === "/auth") && (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      )}
    </>
  );
}
