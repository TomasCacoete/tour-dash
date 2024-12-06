import "./TeamPage.css"

import Navbar from "../../components/Navbar/Navbar";

export default function TeamPage(){
    return(
        <div className="team-page-container">
            <Navbar/>

            <h2>Our Team</h2>

            <div className="legal-warning">
                Aviso legal: os conteúdos constantes deste website foram realizados por alunos no âmbito de uma disciplina - Processos de Gestão e Inovação - do 3º ano da licenciatura em Engenharia Informática da Faculdade de Ciências e Tecnologia da Universidade de Coimbra (FCTUC), pelo que a FCTUC não se responsabiliza pelo seu conteúdo.
            </div>

            <div className="members">
                <div>André Melo</div>
                <div>Diogo Costa</div>
                <div>Diogo Maia</div>
                <div>Gustavo Soares</div>
                <div>Tomás Caçoete</div>
            </div>

            <div className="copywrite">Copyright © 2024 TourDash</div>
        </div>
    )
}