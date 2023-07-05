import Nav from "@components/Nav";
import Provider from "@components/Provider";

import "@styles/globals.css";

export const metadata = {
  title: "Ethnicity",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/images/eth.png"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
