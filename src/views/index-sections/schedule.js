import React from "react";

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

function Schedule() {
  return (
    <>
      <div className="section section-team text-center" id="section-team-chapa">
        <Container>
          <h2 id="title-membros" className="title schedule-title">Cronograma da semana de Integração</h2>
          <div className="team">
            <Row style={{ marginBottom: "3%" }}>
              <Col md="4">
                <div className="team-player">
                  <img
                    style={{ width: "50%" }}
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/segunda.png")}
                  ></img>
                  <h4 className="title schedule-title"
                    style={{ padding: "0 !important", margin: "0 !important" }}>Segunda-feira</h4>
                  <p className="category text-info-schedule">10h50 às 12h30 - Térreo</p>
                  <p className="description schedule-description">
                    Tour pelo IMD - Turno Matutino
                  </p>
                  <p className="category text-info-schedule">16h50 às 18h30 - Térreo</p>
                  <p className="description schedule-description">
                    Tour pelo IMD - Turno Vespertino
                  </p>
                  <Button
                    className="btn-round mr-1"
                    color="info"
                    role="button"
                    size="lg"
                    onClick={() => {
                      document.getElementById("download-button").click();
                    }}
                  >
                    Inscreva-se!
                    <a id="download-button" style={{ display: "none" }} href="https://forms.gle/txkiBMUtiJxvChyD8" target="_blank"></a>
                  </Button>
                  
                </div>
              </Col>
              <Col md="4">
                <div className="team-player">
                  <img
                    style={{ width: "50%" }}
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/terca.png")}
                  ></img>
                  <h4 className="title schedule-title"
                    style={{ padding: "0 !important", margin: "0 !important" }}>Terça-feira</h4>
                  <p className="category text-info-schedule">16h50 às 18h30 - Sala B204</p>
                  <p className="description schedule-description">
                    <b>Palestra: A vivência na UFRN</b>
                    <br />
                    Apresentação de algumas entidades estudantis da UFRN com impacto no IMD: Diretório Acadêmico Ada Lovelace (DAAL), Diretório Central dos Estudantes José Nilson Pinheiro (DCE UFRN), Programa de Educação Tutorial de Ciência da Computação e Instituto de Engenheiros Eletricistas e Eletrônicos Ramo Estudantil UFRN (IEEE)

                  </p>
                  <p className="category text-info-schedule">18h45 às 20h25 - Sala A308</p>
                  <p className="description schedule-description">
                    <b>Palestra: Apresentação do Currículo do BTI</b>
                    <br />
                    Apresentação do Currículo do BTI e explicando sobre ênfases, segundo ciclo, Programa de Estudos Secundários (PES) e nova grade.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="team-player">
                  <img
                    style={{ width: "50%" }}
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/quarta.png")}
                  ></img>
                  <h4 className="title schedule-title"
                    style={{ padding: "0 !important", margin: "0 !important" }}>Quarta-feira</h4>
                  <p className="category text-info-schedule">14h55 às 16h35 - Salas B204 e A306</p>
                  <p className="category text-info-schedule">18h45 às 20h25 - Sala B203</p>
                  <p className="description schedule-description">
                    <b>Roda de Conversa: Entendendo o BTI e como o IMD pode ajudar os estudantes</b>
                    <br />
                    Conversa o Setor de Apoio a Práticas Educacionais (SAPE) sobre apoio psicológico e assistência estudantil no IMD, com a Secretaria de Comunicação sobre comunicação e mídias sociais do Instituto e com a Coordenação do BTI sobre o funcionamento do curso.
                  </p>
                  <p className="category text-info-schedule">16h50 às 18h30 - Sala B204</p>
                  <p className="description schedule-description">
                    <b>Palestra: Apresentação do Currículo do BTI</b>
                    <br />
                    Apresentação do Currículo do BTI e explicando sobre ênfases, segundo ciclo, Programa de Estudos Secundários (PES) e nova grade.
                  </p>
                </div>
              </Col>
            </Row>
            <Row style={{ marginBottom: "3%" }}>
            <Col md="4">
                <div className="team-player">
                  <img
                    style={{ width: "50%" }}
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/quinta.png")}
                  ></img>
                  <h4 className="title schedule-title"
                    style={{ padding: "0 !important", margin: "0 !important" }}>Quinta-feira</h4>
                  <p className="category text-info-schedule">16h50 às 18h30 - Sala B204</p>
                  <p className="description schedule-description">
                    <b>Roda de Conversa: Encontro do Núcleo de Mulheres do IMD</b>
                    <br />
                    Roda de Conversa com o Núcleo de Mulheres do IMD, tratando de como é a vivência dentro da universidade.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="team-player">
                  <img
                    style={{ width: "50%" }}
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/sexta.png")}
                  ></img>
                  <h4 className="title schedule-title"
                    style={{ padding: "0 !important", margin: "0 !important" }}>Sexta-feira</h4>
                  <p className="category text-info-schedule">13h00 às 14h40 - Sala B204</p>
                  <p className="description schedule-description">
                    <b>Mesa Redonda: Tirando Dúvidas com o DAAL</b>
                    <br />
                    Mesa Redonda com a Gestão do Diretório Acadêmico Ada Lovelace (DAAL) tirando dúvidas e encerramento da semana de integração.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div >
    </>
  );
}

export default Schedule; 