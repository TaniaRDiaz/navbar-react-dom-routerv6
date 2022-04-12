import { AiFillGithub as Git } from "react-icons/ai";
import { AiFillTwitterCircle as Twitter } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div>
          <a
            rel="noreferrer"
            href="https://github.com/remix-run/react-router"
            target="_blank"
          >
            <Git className="icons" />
          </a>
          <a
            rel="noreferrer"
            href="https://twitter.com/remix_run"
            target="_blank"
          >
            <Twitter className="icons" />
          </a>
        </div>
        React Router is a fully-featured client and server-side routing library
        for React, a JavaScript library for building user interfaces. React
        Router runs anywhere React runs; on the web, on the server with node.js,
        and on React Native.
      </div>
      <div className="copyrigth">Copyright: Tania Itzel Ramírez Díaz 2022</div>
    </div>
  );
};

export default Footer;
