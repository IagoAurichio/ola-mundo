import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import styles from './SobreMim.module.css';
import fotoSobreMim from 'assets/sobre_mim_foto.png';

const SobreMim = () => {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim ">
      <h3 className={styles.subtitulo}>Olá, eu sou o Iago</h3>

      <img className={styles.fotoSobreMim} src={fotoSobreMim} alt="Foto do Iago Aurichio" />

      <p className={styles.paragrafo}>
        Sou estudante de Sistemas de Informação com sólidos conhecimentos em desenvolvimento web e mobile, além de experiência prática em automação de processos empresariais.
      </p>

      <p className={styles.paragrafo}>
        Atualmente, estou estagiando na área de automatização de processos BPMN, onde participo ativamente da análise e automação de processos empresariais utilizando BPMN para modelagem e otimização.
      </p>

      <p className={styles.paragrafo}>
        Tenho habilidades técnicas em HTML, CSS, JavaScript, MySQL, MongoDB e Flutter. Entre meus projetos notáveis estão o Safe Savings, um ecommerce web desenvolvido para compra de eletrodomésticos sustentáveis, onde utilizei HTML, CSS, JavaScript e MySQL para criar um design responsivo; e o Maua Tasks, um aplicativo de gerenciamento de tarefas desenvolvido com o framework Flutter, que inclui uma interface intuitiva para criação, edição e deleção de tarefas, além de notificações e sincronização de dados em tempo real.
      </p>

      <p className={styles.paragrafo}>
        Meu objetivo é continuar desenvolvendo habilidades em automação de processos empresariais e aprimorar meus conhecimentos em tecnologias de desenvolvimento web e mobile, buscando oportunidades para aplicar meus conhecimentos acadêmicos em projetos práticos e desafiadores, contribuindo para a eficiência e inovação nas áreas de TI e automação.
      </p>
    </PostModelo>
  );
};

export default SobreMim;