import { coffeetea, mnl_portfolio } from "../assets/link_address";
import logo from "../assets/mn_bg_white.ico";

const content_ES = () => {
  const content = document.createElement("article");
  const title = document.createElement("h1");
  title.textContent =
    "Cómo funciona la aplicación web Café o té para controlar los gastos presupuestarios";

  const txt1 = document.createElement("p");
  txt1.textContent =
    "Esta es una aplicación React diseñada como una aplicación puramente del lado del cliente, lo que significa que se ejecuta completamente en el navegador del usuario sin necesidad de un servidor backend para su funcionalidad principal.";

  const subtitle1 = document.createElement("p");
  subtitle1.className = "subtitle";
  subtitle1.textContent = "Propiedad y privacidad completas de los datos.";

  const txt2 = document.createElement("p");
  txt2.textContent =
    "Para el almacenamiento persistente de datos, elegí un enfoque centrado en el usuario utilizando las funciones de exportación e importación de archivos. Este método garantiza que todos los datos permanecen bajo el control del usuario, ya que se guardan localmente en su dispositivo en archivos que puede gestionar, transferir o copiar.";

  const subtitle2 = document.createElement("p");
  subtitle2.className = "subtitle";
  subtitle2.textContent = "Funcionalidades";

  const arrayFeatures = [
    "Cada proyecto o control se puede crear, modificar, leer o eliminar y almacenar temporalmente de forma local (localStorage).",
    "Validación de la entrada de datos",
    "Los gastos se pueden introducir manualmente utilizando una tabla de ingresos.",
    "La tabla de ingresos permite realizar operaciones aritméticas sencillas.",
    "La introducción de categorías de gastos incluye una lista sugerida que permite la uniformidad necesaria para la posterior agrupación de datos. Esta lista incluye inglés, español y portugués. El idioma se define según el idioma seleccionado en la página al crear el nuevo control.",
    "El usuario puede introducir sus propias categorías de gastos, pero teniendo en cuenta la uniformidad.",
    "Se pueden crear proyectos o controles con o sin fechas para actividades específicas.",
    "El módulo de visualización permite agrupar, ordenar y representar gráficamente",
    "En el módulo de ejemplos, hay tres modelos para ilustrar cómo se muestran los datos.",
    "Los datos visualizados pueden imprimirse en archivos PDF",
  ];

  const exp_imp = [
    "Cree un nuevo control o proyecto.",
    "Añada al menos una línea de gastos.",
    "Guárdelo y expórtelo.",
    "Utilícelo en hojas de cálculo de Excel o Drive, o simplemente guárdelo o transfieralo.",
    "Añada datos de gastos sin alterar la estructura del archivo y no cambie el formato de fecha.",
    "De esta manera, puede importarlo de nuevo al sitio web para continuar editándolo o simplemente verlo.",
    "El archivo importado sobrescribirá el archivo anterior, sujeto a la confirmación del usuario.",
  ];

  const tools = [
    "La tabla con múltiples filas-celdas de entrada se diseñó íntegramente utilizando la interacción de componentes React, donde cada celda de cada fila renderiza dinámicamente un campo de entrada y gestiona su propio estado a través del estado a nivel de componente. Este enfoque permite la edición individual a nivel de celda-fila.",
    "Cada proyecto y sus gastos correspondientes se crearon con un constructor de clase. El constructor inicializa las propiedades del objeto, lo que garantiza que cada nuevo proyecto o entrada de gastos comience con una estructura definida y coherente. Este enfoque  mejora la fiabilidad y la facilidad de mantenimiento del código.",
    "Para gestionar las categorías se utilizó una combinación de Set para la unicidad (evita entradas duplicadas) y Map para la asociación de datos (para almacenar pares clave-valor).",
    "Las fechas se manejaron utilizando date-fns.",
    "Para navegar dentro de la app se utilizó react-router-dom,  también se utilizaron parámetros URL en las rutas para pasar variables o datos entre rutas.",
    "Todas las tareas de manipulación de datos (agrupación, clasificación, suma y representación gráfica) se realizaron en el lado del cliente utilizando D3.js.",
    "Los archivos PDF se generaron combinando la librería @react-pdf/renderer para renderizar datos estructurados y contenido dinámico, mientras que se utilizó dom-to-image para capturar e incrustar elementos gráficos. Este método aprovecha la precisión de react-pdf para el texto y el diseño, al tiempo que garantiza que las visualizaciones complejas se conserven mediante la conversión de imágenes.",
  ];

  content.appendChild(title);
  content.appendChild(txt1);
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
   enlace.className ="locateEnlace";
  enlace.setAttribute("href", coffeetea);
  enlace.setAttribute("target", "_blank");
  enlace.setAttribute("rel", "noopener noreferrer");
  enlace.textContent = `prueba ${coffeetea}`;
  content.appendChild(enlace);

  const divAdit = document.createElement("div");
  const text = document.createElement("p");
  text.textContent =
    "Para utilizar la opción de importar datos desde un archivo CSV, proceda de la siguiente manera:";
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
  subtitle3.textContent = "Aspectos destacados del diseño";
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
  enlace2.className ="locateEnlace";
  enlace2.setAttribute("href", coffeetea);
  enlace2.setAttribute("target", "_blank");
  enlace2.setAttribute("rel", "noopener noreferrer");
  enlace2.textContent = `prueba ${coffeetea}`;
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

export { content_ES };
