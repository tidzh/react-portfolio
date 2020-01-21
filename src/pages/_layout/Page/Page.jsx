import React from "react";
import HeaderContainer from "../Header/HeaderContainer";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const Page = ({ children, pageMeta: { title = "", description = "" } }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <HeaderContainer />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};
export default Page;
