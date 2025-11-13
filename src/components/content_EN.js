const content_EN = () => {
  const content = document.createElement("article");
  const title = document.createElement("h1");
  title.textContent = "english content";

  content.appendChild(title);

  return content;
};

export { content_EN };
