import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "../css/main.css";

const Layout = ({ children, data }) => (
  <>
    <Helmet
      title={"title"}
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    >
      <html lang="en" />
    </Helmet>

    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
