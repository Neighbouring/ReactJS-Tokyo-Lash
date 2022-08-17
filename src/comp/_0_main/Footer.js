import React from 'react';
import '../../assets/css/styleFooter';

function Footer() {
  return (
    <footer>
      <div>
        <address>
          <p>
            <a
              href="https://www.google.com/maps/dir//tokyo+lash/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94ce50ab1dee8093:0x2eb101d212b8e094?sa=X&ved=2ahUKEwj0qfOqpc35AhX9ILkGHXHNBjMQ9Rd6BAhwEAU"
              target="_blank"
            >
              R. Araguari, 817 - Cj 51 - Moema - São Paulo, SP - 04514-041
            </a>
          </p>
        </address>
      </div>

      <div className="txt_copyright">
        <p>© 2022 Tokyo Lash. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
