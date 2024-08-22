import "./Experience.scss";
import ciasc from '../../assets/img/ciasc.png';

const Experience = () => {
    return(
        <section id="experience">
            <h2 data-aos="fade-up" data-aos-duration="1000">
                Experiência
            </h2>
            <br/>
            <div className='experience-container' data-aos="fade-up" data-aos-duration="1000">
                <div className='job-container'>
                    <h3>CIASC</h3>
                    <div class="logo-container">
                        <img src={ciasc} alt="ciasc-logo"></img>
                    </div>
                    <br/>
                    <div>
                        <h4>Estágio Desenvolvimento Full Stack</h4>
                        <p>Junho 2024 - Até o momento</p>
                        <div className="texts">
                            <p>Durante minha atuação no CIASC (Centro de Informática e Automação do Estado de Santa Catarina), contribui para projetos de alta relevância no âmbito estadual e governamental, especialmente para o DETRAN de Santa Catarina. Entre os principais projetos em que participei estão:</p>
                            <p><strong>DetranNet:</strong> Colaborei no desenvolvimento e manutenção deste ambiente web, que é a principal plataforma de serviços do DETRAN de Santa Catarina, utilizada internamente pelos colaboradores da instituição.</p>
                            <p><strong>Detran Digital:</strong> Participei de pequenas manutenções e implementação de funcionalidades, deste ambiente web voltado ao cidadão, proporcionando maior acessibilidade e eficiência no acesso aos serviços do DETRAN de forma digital e integrada.</p>
                            <p><strong>Novo Software - Projeto SIT:</strong> Projeto criado com a ideia de melhorar a qualidade de nossos softwares e criar uma maior facilidade de manutenção. Ainda em desenvolvimento. </p>
                            <p>Principais Tecnologias: Java, Spring Boot, Junit, SQL Server, VueJS, Quasar, JIRA.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Experience;