// import { Provider } from "next-auth/client";
import ThemeLayout from "@/layouts/Theme";
import { ActiveAnchorContextProvider } from "@/store/ActiveAnchor";
import { ThemeContextProvider } from "@/store/ThemeContext";

import "@/sass/app.scss";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  const Layout = Component.Layout ? Component.Layout : Fragment;

  const LayoutWithRef = () => {
    return (
      <Layout>
        <Component {...pageProps} />
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
