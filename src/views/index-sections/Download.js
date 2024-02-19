import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function Download() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">ACESSE O MANUAL DO CALOURO DO IMD</h3>
              <h5 className="description">
                Produzimos com muito carinho e pesquisa o Manual do Calouro do IMD, nessa manual você poderá encontrar dicas, informações e macetes de como vivenciar a UFRN e aproveitar o curso da melhor forma possível!
              </h5>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round mr-1"
                color="info"
                role="button"
                size="lg"
                onClick={() => {
                  document.getElementById("download-button").click();
                }}
              >
                Baixar Manual em PDF
                <a id="download-button" style={{display: "none"}} href="/Propostas.pdf" target="_blank" download="Chapa Lia - Propostas"></a>
              </Button>
              <Button
                className="btn-round"
                color="primary"
                href="/manual"
                outline
                role="button"
                size="lg"
              >
                Acessar Manual online
              </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          
        </Container>
      </div>
    </>
  );
}

export default Download;
