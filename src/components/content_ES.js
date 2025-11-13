const content_ES = () => {
  const content = document.createElement("article");
  const title = document.createElement("h1");
  title.textContent = "spanish content";

  content.appendChild(title);

  return content;
};

export { content_ES };