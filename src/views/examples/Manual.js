import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Tabs from "../index-sections/Tabs.js"

function Manual() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <Tabs />
        <div className="section section-contact-us text-center">
          <Container>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">

                <h2 className="title">Gostaria de sugerir alguma pauta?</h2>
                <p className="description">Sua opinião é muito importante para a gente!</p>
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Nome..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                    id="nome-sugestao"
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                    id="email-sugestao"
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Explique melhor aqui..."
                    rows="4"
                    type="textarea"
                    id="texto-sugestao"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      let nome = document.getElementById("nome-sugestao").value;
                      let email = document.getElementById("email-sugestao").value;
                      let texto = document.getElementById("texto-sugestao").value;

                      let assunto = `Sugestão de ${nome} (${email})`;
                      let mensagem = `Olá, sou ${nome} (${email}) e gostaria de fazer uma sugestão para a Chapa Lia Medeiros, concorrente para a gestão do DAAL!\n\n${texto}\nAtenciosamente,\n`;
                      let urlmail = `mailto:lia.medeiros.daal@gmail.com?subject=${assunto}&body=${mensagem}`;
                      window.open(urlmail, "_blank");
                    }}
                    size="lg"
                  >
                    Enviar Mensagem
                  </Button>
                </div>
                <a style={{color: "gray"}} href="https://forms.gle/thJvtPfnqrg5WX5L9" target="_blank">Não quero me identificar</a>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default Manual;
