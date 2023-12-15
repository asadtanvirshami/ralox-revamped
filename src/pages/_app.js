import '@/styles/main.scss'
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primeflex/primeflex.css';                                   // css utility
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import 'aos/dist/aos.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import {useRouter, Router} from 'next/router';
import { useState } from 'react';

import Layout from '@/components/shared/Layout';

export default function App({
  Component, pageProps
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => setLoading(false));

  return (
    <>
      {router.pathname !== "/login" &&
        router.pathname !== "/signup" &&
        router.pathname !== "/" &&
        router.pathname !== "/admin_login" && (
          <>
            {loading ? (
              <Layout>
                <>Loading...</>
              </Layout>
            ) : (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </>
        )}
      {(router.pathname === "/" ||
        router.pathname === "/login" ||
        router.pathname === "/signup" ||
        router.pathname === "/admin_login") && <Component {...pageProps} />}
    </>
  );
}
