import { coffeetea, mnl_portfolio } from "../assets/link_address";
import logo from "../assets/mn_bg_white.ico";

const content_PT = () => {
  const content = document.createElement("article");
  const title = document.createElement("h1");
  title.textContent =
    "Como funciona a aplicação web Café ou Chá para controlo de despesas orçamentais";

  const firstParr = document.createElement("div");
  const enlaceInit = document.createElement("a");
  enlaceInit.setAttribute("href", coffeetea);
  enlaceInit.setAttribute("target", "_blank");
  enlaceInit.setAttribute("rel", "noopener noreferrer");
  enlaceInit.textContent = `${coffeetea}`;
  content.appendChild(enlaceInit);

  const txt1 = document.createElement("p");
  txt1.textContent =
    "é uma aplicação React concebida como uma aplicação puramente do lado do cliente, o que significa que é executada inteiramente no navegador do utilizador, sem necessidade de um servidor backend para a sua funcionalidade principal.";

  const subtitle1 = document.createElement("p");
  subtitle1.className = "subtitle";
  subtitle1.textContent = "Propriedade e privacidade completas dos dados.";

  const txt2 = document.createElement("p");
  txt2.textContent =
    "Para o armazenamento persistente de dados, optei por uma abordagem centrada no utilizador, utilizando as funções de exportação e importação de ficheiros. Este método garante que todos os dados permaneçam sob o controlo do utilizador, uma vez que são guardados localmente no seu dispositivo em ficheiros que pode gerir, transferir ou copiar.";

  const subtitle2 = document.createElement("p");
  subtitle2.className = "subtitle";
  subtitle2.textContent = "Funcionalidades";

  const arrayFeatures = [
    "Cada projeto ou controlo pode ser criado, modificado, lido ou eliminado e armazenado temporariamente localmente (localStorage).",
    "Validação da entrada de dados",
    "A entrada das despesas pode ser feita manualmente através de uma tabela de entradas.",
    "A tabela de entradas permite o cálculo de operações aritméticas simples.",
    "A introdução das categorias de despesas inclui uma lista sugerida que permite a uniformidade necessária para o agrupamento posterior dos dados. Esta lista contém os idiomas inglês, espanhol e português. O idioma é definido pelo idioma selecionado na página no momento da criação do novo controlo.",
    "O utilizador pode introduzir as suas próprias categorias de despesas, mas tendo em conta a uniformidade",
    "É possível criar projetos ou controlos com ou sem datas para atividades pontuais.",
    "O módulo de visualização permite agrupar, ordenar e representar graficamente",
    "No módulo exemplos, há três modelos para ilustrar como os dados são visualizados.",
    "Os dados visualizados podem ser impressos em ficheiros PDF",
  ];

  const exp_imp = [
    "Crie um novo controlo ou projeto.",
    "Adicione pelo menos uma linha de despesas.",
    "Guarde e exporte.",
    "Utilize no Excel ou em folhas de cálculo do Drive. Ou simplesmente guarde-o ou transfira-o.",
    "Adicione dados de despesas sem alterar a estrutura do ficheiro e não altere o formato da data.",
    "Os aspetos a considerar são: o formato da data deve ser «aaaa-MM-dd», o separador em números com decimais deve ser um ponto (.), e o ficheiro CSV deve usar uma vírgula (,) como separador. Os ficheiros que usam um ponto e vírgula como separador serão rejeitados.",
    "Dessa forma, pode importá-lo novamente para a página web para continuar a modificá-lo ou simplesmente visualizá-lo.",
    "O ficheiro importado irá reescrever o ficheiro anterior, após confirmação do utilizador.",
  ];

  const tools = [
    "A tabela com várias linhas-células de entrada foi projetada inteiramente usando a interação de componentes React, onde cada célula em cada linha renderiza dinamicamente um campo de entrada e gerencia o seu próprio estado através do estado ao nível do componente. Esta abordagem permite a edição individual ao nível da linha-célula.",
    "Cada projeto e suas despesas correspondentes foram criados com um construtor de classe. O construtor inicializa as propriedades do objeto, garantindo que cada novo projeto ou entrada de despesa comece com uma estrutura definida e consistente. Essa abordagem  melhora a confiabilidade e a manutenção do código.",
    "Para gerir categorias, foi utilizada uma combinação de Set para exclusividade (impede entradas duplicadas) e Map para associação de dados (para armazenar pares chave-valor).",
    "As datas foram tratadas utilizando date-fns.",
    "Para navegar dentro da aplicação, foi utilizado o react-router-dom,  também foram utilizados parâmetros URL nas rotas para passar variáveis ou dados entre rotas.",
    "Todas as operações de manipulação de dados (agrupamento, ordenação, soma e representação gráfica) foram realizadas no lado do cliente utilizando D3.js.",
    "Os ficheiros PDF foram gerados combinando a biblioteca @react-pdf/renderer para renderizar dados estruturados e conteúdo dinâmico, enquanto dom-to-image foi usado para capturar e incorporar elementos gráficos. Este método aproveita a precisão do react-pdf para o texto e o design, garantindo ao mesmo tempo que as visualizações complexas sejam mantidas através da conversão de imagens.",
  ];

  content.appendChild(title);
  content.appendChild(firstParr);
  firstParr.appendChild(enlaceInit);
  firstParr.appendChild(txt1);
  content.appendChild(subtitle1);
  content.appendChild(txt2);
  content.appendChild(subtitle2);

  arrayFeatures.forEach((e) => {
    const span = document.createElement("span");
    span.textContent = "\u25E6";

    const div = document.createElement("div");
    const text = document.createElement("p");
    text.textContent = e;

    content.appendChild(div);
    div.appendChild(span);
    div.appendChild(text);
  });

  const enlace = document.createElement("a");
  enlace.className = "locateEnlace";
  enlace.setAttribute("href", coffeetea);
  enlace.setAttribute("target", "_blank");
  enlace.setAttribute("rel", "noopener noreferrer");
  enlace.textContent = `teste aqui ${coffeetea} `;
  content.appendChild(enlace);

  const divAdit = document.createElement("div");
  const text = document.createElement("p");
  text.textContent =
    "Para utilizar a modalidade de importação de dados a partir de um ficheiro CSV, deve proceder da seguinte forma:";
  content.appendChild(divAdit);
  divAdit.className = "sublist";
  divAdit.appendChild(text);

  exp_imp.forEach((e) => {
    const span = document.createElement("span");
    span.textContent = "\u2B29";

    const div = document.createElement("div");
    div.className = "sublist";
    const text = document.createElement("p");
    text.textContent = e;

    content.appendChild(div);
    div.appendChild(span);
    div.appendChild(text);
  });

  const subtitle3 = document.createElement("p");
  subtitle3.className = "subtitle";
  subtitle3.textContent = "Destaques do design";
  content.appendChild(subtitle3);

  tools.forEach((e) => {
    const span = document.createElement("span");
    span.textContent = "\u25E6";

    const div = document.createElement("div");
    const text = document.createElement("p");
    text.textContent = e;

    content.appendChild(div);
    div.appendChild(span);
    div.appendChild(text);
  });

  const enlace2 = document.createElement("a");
  enlace2.className = "locateEnlace";
  enlace2.setAttribute("href", coffeetea);
  enlace2.setAttribute("target", "_blank");
  enlace2.setAttribute("rel", "noopener noreferrer");
  enlace2.textContent = `teste aqui ${coffeetea} `;
  content.appendChild(enlace2);

  const footer = document.createElement("footer");
  const mn_logo = new Image();
  mn_logo.src = logo;
  const img = document.createElement("img");
  img.setAttribute("src", mn_logo.src);
  img.setAttribute("alt", "maria nelly lopez logo");
  img.setAttribute("width", "30px");
  img.setAttribute("height", "30px");
  const copy = document.createElement("p");
  copy.textContent = "\u00A9 2025 marianellylopez";

  const contactme = document.createElement("a");
  contactme.setAttribute("href", mnl_portfolio);
  contactme.setAttribute("target", "_blank");
  contactme.setAttribute("rel", "noopener noreferrer");
  contactme.textContent = "Contact Me for Developer Stuff";

  content.appendChild(footer);
  footer.appendChild(img);
  footer.appendChild(copy);
  footer.appendChild(contactme);

  return content;
};

export { content_PT };
