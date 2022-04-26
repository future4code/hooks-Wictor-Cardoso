import React from "react";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import styled from "styled-components";
import AppStyle, {PageSectionContainer,
  AppDiv,
  Global,
  PageSectionContainerH3,
  PageH2} from "./AppStyle";

function App() {
  return (
    <AppDiv>
      <PageSectionContainer>
        <PageH2>Dados pessoais</PageH2>
        <CardGrande
          imagem="https://scontent.fcpv16-1.fna.fbcdn.net/v/t39.30808-6/272866374_4574812889294216_3910816744628853845_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEdHpCKRqdYhF6oo5rZNMg5Gexol_5aqY0Z7GiX_lqpjeI37a3SMKqY-s44O4n-Qo-o_R9aE2QEBXJMBk324ElK&_nc_ohc=eCX-_XYlx4IAX8IQaMw&_nc_ht=scontent.fcpv16-1.fna&oh=00_AT9PqVUfjVt6hbVG_8oPm47UyK1OTUkvSEvNKpe2XVNjmw&oe=62690647"
          nome="Wictor Feitosa"
          descricao="Oi, eu sou o Wictor. Estudante do curso WEB-FULL Stack na Labenu, tenho 28 anos, trabalho como autônomo em vendas de cereais atualmente, mas pretendo trabalhar com programação web."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/2026/2026596.png"
          texto="Ver mais"
        />
      </PageSectionContainer>

      <CardPequeno
        imagem="https://s.manualdousuario.net/wp-content/uploads/2018/02/Logo-do-Gmail-960x540.png"
        email="labenu.2022@gmail.com"
      />

      <CardPequeno
        imagem="https://midiasstoragesec.blob.core.windows.net/001/2018/05/logo-maps.png"
        endereco="Rua Labenu, nº2022"
      />

      <PageSectionContainer>
        <PageH2>Experiências profissionais</PageH2>
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/620fdad771beb335ce5e4aab_Logo%20completo.svg"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!
          Eu sou aluno aqui."
        />

        <CardGrande
          imagem="https://d1likr6vgtxkkw.cloudfront.net/Custom/Content/Products/12/16/12160_cesta-basica-04-com-29-itens-apa-moveis-nova-era_m4_637490693421245532.jpg"
          nome="Vendedor de cestas básicas"
          descricao="Vendedor autônomo de cereais. #NãoRecomendo"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <PageH2>Minhas redes sociais</PageH2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </PageSectionContainer>
    </AppDiv>
  );
}

export default App;
