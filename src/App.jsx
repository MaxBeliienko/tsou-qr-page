import "./App.css";
import logo from "./assets/logo.png";
import fb from "./assets/fb.png";
import tiktok from "./assets/tiktok.png";
import instagram from "./assets/inst.png";
import googlemap from "./assets/googlemap.png";

function App() {
  const links = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/autoschool.znamianka/?igsh=dzNneGtwc3k2eGR2#",
      icon: instagram,
      color: "#E1306C",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/avtoshkola.znamianka?rdid=uQxtHVU6yDGTsxxx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F167ykpm78o%2F#",
      icon: fb,
      color: "#1877F2",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@avtoshkola.znamianka?_r=1&_t=ZM-92R2Kvor0G0",
      icon: tiktok,
      color: "#000000",
    },

    {
      name: "Відгуки на Google Maps",
      url: "https://www.google.com/maps/place/%D0%90%D0%B2%D1%82%D0%BE%D1%88%D0%BA%D0%BE%D0%BB%D0%B0+%D0%97%D0%9C%D0%A1%D0%A2%D0%9A+%D0%A2%D0%A1%D0%9E%D0%A3/@48.7167108,32.6871142,17z/data=!4m8!3m7!1s0x40d08d412b26ca47:0x76df939202ed45cd!8m2!3d48.7167108!4d32.6871142!9m1!1b1!16s%2Fg%2F11vd70xjqj?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D",
      icon: googlemap,
      color: "#4285F4",
    },
  ];

  return (
    <div className="container">
      <div className="card">
        <header className="header">
          <div className="logo-wrap">
            <img src={logo} alt="logo" className="logo" />
          </div>

          <h1>Автошкола ЗМСТК ТСО України</h1>
          <p>Вчимо керувати безпечно, впевнено та із задоволенням</p>
        </header>

        <div className="links-list">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-item"
              style={{ "--hover-color": link.color }}
            >
              <img src={link.icon} alt="facebook logo" className="icon" />
              <span className="link-text">{link.name}</span>
              <span className="arrow">→</span>
            </a>
          ))}
        </div>

        <footer className="footer">
          <a href="tel:+380503411049" className="phone-button">
            Зателефонувати нам
          </a>
          <a
            href="https://www.google.com/maps/place/%D0%90%D0%B2%D1%82%D0%BE%D1%88%D0%BA%D0%BE%D0%BB%D0%B0+%D0%97%D0%9C%D0%A1%D0%A2%D0%9A+%D0%A2%D0%A1%D0%9E%D0%A3/@48.7167109,32.6869335,20z/data=!4m6!3m5!1s0x40d08d412b26ca47:0x76df939202ed45cd!8m2!3d48.7167108!4d32.6871142!16s%2Fg%2F11vd70xjqj?authuser=0&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
            target="blank"
            className="addr"
          >
            м. Знам'янка, вул. Київська, 23
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
