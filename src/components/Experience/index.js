import "./Experience.scss";
import ciasc from '../../assets/img/ciasc.png';
import { ReactComponent as PaipeLogo } from '../../assets/img/paipe.svg'; 

const Experience = () => {
    return(
        <section id="experience">
            <h2 data-aos="fade-up" data-aos-duration="1000">
                Experiências
            </h2>
            <br/>
            <div className='experience-container' data-aos="fade-up" data-aos-duration="1000">
                <div className='job-container'>
                    <div className="logo-container">
                        <PaipeLogo className="logo-paipe" />
                    </div>
                    <br/>
                    <div className="texts-title">
                        <h4>Desenvolvedor Pleno Full Stack</h4>
                        <p>Junho 2025 - Até o momento</p>
                        <div className="texts">
                            <p>Atuando como Desenvolvedor Full Stack na <strong>Paipe</strong>, integro a operação dedicada ao CIASC, dando continuidade e evoluindo os projetos estratégicos do DETRAN de Santa Catarina, como Detrannet e Detran Digital. Minhas responsabilidades foram ampliadas para incluir o desenvolvimento de novas APIs que pretendem resolver problemas antigos e também a reescrita de projetos antigos feito em .NET 3.0 para uma versão atualizada feita Spring Boot + Quarkus, além disso, participo ativamente das reuniões de planejamento e definição técnica das soluções.</p>
                            <p>Principais Tecnologias: Java, Spring Boot, Junit, SQL Server, VueJS, Quasar, JIRA.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='experience-container' data-aos="fade-up" data-aos-duration="1000">
                <div className='job-container'>
                    <div className="logo-container">
                        <img src={ciasc} alt="ciasc-logo"></img>
                    </div>
                    <br/>
                    <div className="texts-title">
                        <h4>Estágio Desenvolvimento Full Stack</h4>
                        <p>Junho 2024 - Junho 2025</p>
                        <div className="texts">
                            <p>Durante minha atuação no <strong>CIASC</strong> (Centro de Informática e Automação do Estado de Santa Catarina), contribui para projetos de alta relevância no âmbito estadual e governamental, especialmente para o DETRAN de Santa Catarina. Entre os principais projetos em que participei estão:</p>
                            <p><strong>DetranNet:</strong> Colaborei no desenvolvimento e manutenção deste ambiente web, que é a principal plataforma de serviços do DETRAN de Santa Catarina, utilizada internamente pelos colaboradores da instituição.</p>
                            <p><strong>Detran Digital:</strong> Ambiente web voltado ao cidadão, proporcionando maior acessibilidade e eficiência no acesso aos serviços do DETRAN de forma digital e integrada.</p>
                            <p>Principais Tecnologias: Java, Spring Boot, Junit, SQL Server, VueJS, Quasar, JIRA.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Experience;