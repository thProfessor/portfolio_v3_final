import CustomCursor from "../components/CustomCursor";
import GlobalStyles from "../styles/global";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
