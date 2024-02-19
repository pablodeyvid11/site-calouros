/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="/index"
              >
                Página Inicial
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/daal.ufrn"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="mailto:daal@imd.ufrn.br"
              >
                E-mail
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
        Diretório Acadêmico Ada Lovelace
        </div>
      </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
