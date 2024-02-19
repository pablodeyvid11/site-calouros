/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
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
  );
}

export default DarkFooter;
