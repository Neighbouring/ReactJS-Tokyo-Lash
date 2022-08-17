import React from 'react';

function Footer() {
  return (
    <footer>
      <div>
        <p>Tokyo Lash</p>
      </div>

      <div>
        <address>
          <p>R. Araguari, 817 - Cj 51 - Moema</p>
          <p>São Paulo, SP - 04514-041</p>
        </address>
      </div>

      <div>
        Contato via <a href="mailto:falecom@tokyolash.com.br">email</a>.
      </div>

      <div className="txt_copyright">
        <p>© 2022 Tokyo Lash. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
