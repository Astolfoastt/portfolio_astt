import LinkedinIcon from "../../assets/linkedinIcon.svg";
import GitHubIcon from "../../assets/githubIcon.svg";

export const HomePageItem = () => {
  return (
    <main>
      <div>
        <h1>ASTOLFO DANIEL</h1>
        <span>DESENVOLVEDOR FRONT-END</span>
        <p>
          Desenvolvedor front-end apaixonado por criar experiências web
          cativantes. Habilidoso em HTML, CSS, SASS , JavaScript e React.
          Comprometido com design responsivo e usabilidade.
        </p>
        <div>
          <button>
            <img src={LinkedinIcon} alt="Icon Linkedin" />
            Linkedin
          </button>
          <button>
            <img src={GitHubIcon} alt="Icon GitHub" />
            Git Hub
          </button>
        </div>
      </div>
    </main>
  );
};
