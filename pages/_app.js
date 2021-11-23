import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";

import { useRouter } from "next/router";

import { Fragment, useRef, forwardRef, useImperativeHandle } from "react";
// import { Provider } from "next-auth/client";

import ThemeLayout from "@/layouts/Theme";

import { ActiveAnchorContextProvider } from "@/store/ActiveAnchor";
import { ThemeContextProvider } from "@/store/ThemeContext";

import "@/sass/app.scss";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  const router = useRouter();
  const Layout = Component.Layout ? Component.Layout : Fragment;

  const ForwardedComponent = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({}));

    return <Component {...props} {...pageProps} key={router.route} />;
  });

  const LayoutWithRef = () => {
    const componentRef = useRef();
    return (
      <Layout>
        <ForwardedComponent ref={componentRef} />;
      </Layout>
    );
  };

  return (
    // <Provider session={session}>
    <ActiveAnchorContextProvider>
      <ThemeContextProvider>
        <ThemeLayout>
          <LayoutWithRef />
        </ThemeLayout>
      </ThemeContextProvider>
    </ActiveAnchorContextProvider>

    // </Provider>
  );
};

export default App;
