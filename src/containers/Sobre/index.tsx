import Titulo from "../../components/Titulo/titulo";
import Paragrafo from "../../components/Paragrafo/paragrafo";
import { GithubSecao } from "./stytles";
const Sobre = () => (
    <section>
        <Titulo fontSize={16}>Sobre mim</Titulo>
        <Paragrafo >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptate illo hic eum aspernatur odit, voluptates blanditiis,
            nemo accusantium architecto officiis tempora consequatur eligendi
            ,rerum quo illum reiciendis minus.
            Dolores, voluptatum?
        </Paragrafo>
        <GithubSecao>
          <img  src="https://github-readme-stats.vercel.app/api?username=atilawfonseca&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
          <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=atilawfonseca&layout=compact&langs_count=7&theme=dracula"/>
        </GithubSecao>
    </section>
)

export default Sobre;
