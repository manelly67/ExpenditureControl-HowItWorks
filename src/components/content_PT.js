const content_PT = () => {
  const content = document.createElement("article");
  const title = document.createElement("h1");
  title.textContent = "portuguese content";

  content.appendChild(title);

  return content;
};

export { content_PT };