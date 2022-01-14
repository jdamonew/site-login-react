import React from "react";
import { Modal } from 'rsuite';

//Component
import Avatar from "../Avatar";
import InformationDeveloper from "../InformationDeveloper";

//Config
import "./style.scss";

const ModalDeveloper = ({ onClick, open }) => {
    return (
        <>
            <p onClick={onClick} className='footer-person'>Jóbia Damone</p>

            <Modal overflow open={open} onClose={onClick} >
                <Modal.Header style={{ textAlign: 'center' }} >
                    <Avatar src="https://ca.slack-edge.com/TC7QBA58F-U02LA10BVTJ-b92220470c87-512" />
                    <InformationDeveloper/>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <div className="about-me">
                        <h4>Sobre Mim</h4>
                        <p>
                            Olá, que legal que você chegou aqui. Se chegou até aqui, significa que você quer saber um pouco a mais sobre mim, nada melhor do que eu mesma falar sobre minha pessoa, não é mesmo? Vamos lá! <br/><br/>
                            Moro em Pernambuco e tenho 22 anos. Sou formada em Analise e Desenvolvimento de Sistemas na FAFICA (Faculdade de Filosofia, Ciências e Letras de Caruaru). Não tenho experiência profissional na área de desenvolvimento ainda, mas já fiz alguns freelance como UI/UX Design e Front-End.<br/><br/>
                            Sou apaixonada por UI/UX Design e desenvolvimento Front-End. Acho incrível como cada componente simples e utilizado de maneira correta vai formando uma tela incrivelmente pulcra e robusta.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ModalDeveloper