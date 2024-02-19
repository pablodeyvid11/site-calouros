/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
          <div className="div-circle">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo-header.png")}
            ></img>  
            </div>
            <h1 className="h1-seo" style={{marginBottom: "0"}}>BEM VINDOS INGRESSANTES</h1>
            <h3 style={{marginTop: "0", marginBottom: "20%"}}>2024.1</h3>
            <h4>Diretório Acadêmico Ada Lovelace - DAAL</h4>
            <h5>Metrópole Digital - UFRN</h5>
          </div>

        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
