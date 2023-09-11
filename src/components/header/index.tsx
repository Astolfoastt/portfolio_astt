import LogoIcon from "../../assets/logoIcon.svg";
import MenuIcon from "../../assets/menuIcon.svg";
import style from  "./style.module.scss";

export const Header = () => {
  return (
    <header>
      <div className={style.container}>
        <div className={style.containerLogo}>
          <img src={LogoIcon} alt="Logo Portfólio" />
        </div>
        <div className={style.containerNav}>
            <span>MENU</span>
            <img src={MenuIcon} alt="Menu Icon" />
        </div>
      </div>
    </header>
  );
};
