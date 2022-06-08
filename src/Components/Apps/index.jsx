import notifications from "../../assets/images/notifications.png";
import google_play from "../../assets/images/google_play.png";
import app_store from "../../assets/images/app_store.png";
import "./style.css";

export const Apps = () => {
  return (
    <section className="apps">
      <div className="apps-wrapper">
        <div className="apps-info">
          <h2 className="apps-info-title">
            Baixe nosso app para desfrutar mais!
          </h2>
          <p className="apps-info-description">
            Amet in elementum nulla scelerisque dui, egestas at. Elit
            consectetur turpis elementum amet vitae et etiam nec. Varius
            volutpat hac adipiscing tincidunt pretium.
          </p>
          <div className="apps-info-buttons">
            <button className="apps-button">
              <img
                src={google_play}
                alt="Botão para download do app no Google Play"
              />
            </button>
            <button className="apps-button">
              <img
                src={app_store}
                alt="Botão para download do app na App Store"
              />
            </button>
          </div>
        </div>
        <img
          className="container-img"
          src={notifications}
          alt="Pessoa conectada em aplicativos pelo smartphone"
        />
      </div>
    </section>
  );
};
