import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col style={{ flex: "auto", maxWidth: "100%" }} md="10" xl="6">
              <p className="category">Propostas por diretoria</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons objects_globe"></i>
                        Geral
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="now-ui-icons education_agenda-bookmark"></i>
                        Secretaria
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        <i className="now-ui-icons business_money-coins"></i>
                        Tesouraria
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "4" ? "active" : ""}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("4");
                        }}
                      >
                        <i className="now-ui-icons education_hat"></i>
                        Ensino
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "5" ? "active" : ""}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("5");
                        }}
                      >
                        <i className="now-ui-icons media-1_camera-compact"></i>
                        Comunicação
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "6" ? "active" : ""}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("6");
                        }}
                      >
                        <i className="now-ui-icons emoticons_satisfied"></i>
                        Mulheres e LGBTQIAP+
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "7" ? "active" : ""}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("7");
                        }}
                      >
                        <i className="now-ui-icons sport_user-run"></i>
                        Eventos e Lazer
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{cursor: "pointer"}}
                        onClick={(e) => {
                          document.getElementById("download-button").click();
                        }}
                      >
                        <a id="download-button" style={{display: "none"}} href="/Propostas.pdf" target="_blank" download="Chapa Lia - Propostas"></a>
                        <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                        Download
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <h6>Ouvidoria</h6>
                      <p>
                        Criar uma ouvidoria discente, para que sejam recebidos denúncias e relatos, visando assumir uma postura de proteção ao discente, apoiando-o e protegendo-o.
                      </p>
                      <h6>Oportunidades</h6>
                      <p>
                        Pleitear que os discentes tenham preferência nas vagas ofertadas pelo Metrópole Parque (antigo Inova).
                      </p>
                      <h6>Convivência</h6>
                      <p>
                        Pleitear um espaço de convivência/estudo coletivo para que os discentes tenham onde estudar e interagir em um espaço com infraestrutura de qualidade, com mesas, cadeiras, ar-condicionado, computadores e lousa.
                      </p>
                      <h6>Conforto térmico</h6>
                      <p>
                        Mitigar o problema do conforto térmico, pleiteando a instalação de ventiladores, como os existentes no Metrópole Parque, nos demais andares.
                      </p>
                      <h6>Segurança</h6>
                      <p>
                        Defendemos a melhora na iluminação entre o IMD e o RU, principalmente em frente a residência, visando diminuir a sensação de insegurança que assola os discentes do noturno.
                      </p>
                      <h6>Portal do DAAL</h6>
                      <p>
                        Criação de um site oficial para o DAAL, pelo qual o estudante poderá acompanhar todas as prestações de contas da gestão, solicitações de turmas feitas pelos discentes e notas sobre ações do diretório acadêmico.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <h6>Revisão estatutária</h6>
                      <p>
                        Revisão do estatuto do DAAL, visando modernizá-lo e adaptá-lo às necessidades atuais da comunidade discente.
                      </p>
                      <h6>Atividades Complementares do BTI</h6>
                      <p>
                        Pleiteamos a revisão da resolução de Atividades Complementares do BTI, uma das mais rígidas da UFRN, a fim de possibilitar que os alunos possam usufruir de uma diversidade maior de opções.
                      </p>
                      <h6>Participação no conselho do IMD e no colegiado do BTI</h6>
                      <p>
                        Participar de todas as reuniões abertas da cúpula da gestão do IMD, visando sempre expor nosso ponto de vista, o ponto de vista discente.
                      </p>
                      <h6>CNPJ do DAAL</h6>
                      <p>
                        Estudar criação do CNPJ do DAAL e criar planejamento de registro da entidade no cartório.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <h6>Portal da transparência do DAAL</h6>
                      <p>
                        Criar um portal da transparência do DAAL, para que a comunidade discente possa acompanhar e fiscalizar de perto como as verbas do diretório são utilizadas.
                      </p>
                      <h6>Vendas de produtos feitas pelo DAAL</h6>
                      <p>
                        Realizar vendas de camisas, canecas e garrafas, com intuito de gerar fundos ao DAAL. Com esses fundos a gestão pretende realizar eventos e políticas sociais.
                      </p>
                      <h6>Conta bancária exclusiva</h6>
                      <p>
                        Criação de uma conta bancária única e exclusiva para o DAAL.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                      <h6>Trabalho conjunto com a Diretoria de Ensino do IMD</h6>
                      <p>
                        Trabalhar juntamente com a Diretoria de Ensino do IMD, principalmente nos inícios dos semestres, a fim de que as turmas ofertadas consigam suprir a demanda dos alunos, para isso, além do forms, sugerimos a verificação de quantos alunos passaram no componente anterior, como por exemplo, quantos passaram em ITP e levar isso em conta na hora de ofertar vagas de LP1.
                      </p>
                      <h6>Incentivar Ligas Acadêmicas</h6>
                      <p>
                        Incentivar e auxiliar na criação de ligas acadêmicas, como ocorrido em outras universidades, visando impulsionar a produção de conhecimento e ciência em nosso curso.
                      </p>
                      <h6>Alternativas de espaços e horários</h6>
                      <p>
                        Buscaremos alternativas e mais espaços de aula a fim de ampliar a oferta de disciplinas, como aproveitar mais do nPITI e horários que hoje são preteridos como M12, T56 e N34. Também acreditamos que as disciplinas EaD deveriam se concentrar justamente nesses horários com menos demanda, abrindo assim mais possibilidades para a comunidade discente na hora de montar a grade do semestre.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills5">
                      <h6>Comunidade no WhatsApp</h6>
                      <p>
                        Criar um canal de comunicação entre o DAAL e os discentes do IMD, para isso será criada uma comunidade no Whatsapp, onde serão disponibilizadas enquetes, notícias importantes e divulgadas oportunidades.
                      </p>
                      <h6>Fortalecimento das redes sociais do DAAL</h6>
                      <p>
                        Fortalecimento das redes sociais do DAAL, com posts frequentes e maior interação entre DAAL e discentes.
                      </p>
                      <h6>Quadro de feedbacks sobre as disciplinas</h6>
                      <p>
                        Criação do quadro "O que você pagou? O que você achou?", onde discentes que pagaram X componente com Y professor, digam o que acharam, a fim de fornecer um entendimento melhor sobre as disciplinas do ponto de vista discente.
                      </p>
                      <h6>Redes sociais com transparência</h6>
                      <p>
                        Utilizar as redes sociais do DAAL como meio de comunicação para transparentemente demonstrar as ações e iniciativas da gestão, com o objetivo de prestar contas à comunidade discente sobre as atividades em andamento.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills6">
                      <h6>Encontro bimestrais do grupo de mulheres</h6>
                      <p>
                        Realizar encontros bimestrais do grupo de mulheres, visando fortalecer os laços entre as discentes, onde também seria discutido formas de aumentar a qualidade de vida das mulheres dentro do IMD.
                      </p>
                      <h6>Caixinhas com absorventes nos banheiros femininios do IMD</h6>
                      <p>
                        Disponibilizar caixinhas com absorventes nos banheiros do IMD no formato "deixe quando puder e pegue quando precisar", visando assegurar o direito a dignidade menstrual.
                      </p>
                      <h6>Ações com meninas interessadas em entrar no IMD</h6>
                      <p>
                        Realizar ações com meninas interessadas a ingressar no IMD, como rodas de conversa, visando aumentar a presença feminina nos cursos.
                      </p>
                      <h6>Realizar encontros bimestrais do grupo LGBTQIAP+</h6>
                      <p>
                        Realizar encontros bimestrais do grupo LGBTQIAP+, visando fortalecer os laços entre os(as) discentes, onde também seria discutido formas de aumentar a qualidade de vida da comunidade dentro do IMD.
                      </p>
                      <h6>Apoiar e encaminhar denuncias recebidas através da ouvidoria do IMD</h6>
                      <p>
                        Disponibilizar a ouvidoria do DAAL para recebimento e acolhimento, de denúncias relacionadas a LGBTFOBIA e machismo no IMD.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills7">
                      <h6>Hackathon do IMD</h6>
                      <p>
                        Realização de uma Hackathon anual entre os discentes do IMD.
                      </p>
                      <h6>Update</h6>
                      <p>
                        Realização do evento anual do DAAL, o Update, em novo formato, visando abranger o máximo de discentes possíveis.
                      </p>
                      <h6>Semana de integração com os calouros</h6>
                      <p>
                        Realização da semana de integração com os calouros, onde ocorreriam gincanas, palestras, coffee break, orientações e explicações sobre PES, 2º ciclo e ênfase.
                      </p>
                      <h6>Semana de orientação profissional</h6>
                      <p>
                        Realização da semana de orientação profissional, explicando as áreas da TI além do desenvolvimento web, com participação de egressos do IMD que atuam em diversas áreas da TI, visando dar um norte aos que desejam seguir por aquele caminho.
                      </p>
                      <h6>Cine IMD</h6>
                      <p>
                        Exibição de filmes relacionados a TI ou temas relevantes, com venda de pipoca, suco etc.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
