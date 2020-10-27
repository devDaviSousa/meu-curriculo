const $ = document.querySelector.bind(document);

function TabNavigation() {
  const html = {
    links: [...$(".tab-links").children],
    contents: [...$(".tab-content").children],
    openTab: $("[data-open]"),
  };

  //Desaparecer as tabs quando iniciar a aplicação
  function hideAllTabContent() {
    html.contents.forEach((section) => {
      section.style.display = "none";
    });
  }

  //Quando clicar remover as classes ativas
  function removeAllActiveClass() {
    html.links.forEach((tab) => {
      tab.className = tab.className.replace(" active", "");
    });
  }
  //Mostrar tab que foi clicada
  function showCurrentTab(id) {
    const tabcontent = $("#" + id);
    tabcontent.style.display = "block";
      if (id==="habilidade" || id === "experiencia" || id==="educacao"){
      tabcontent.style.display = "grid";
      }

  }
  //Selecionar uma Tab
  function selectTab(event) {
    hideAllTabContent();
    removeAllActiveClass();

    const target = event.currentTarget;
    showCurrentTab(target.dataset.id);

    target.className += " active";
  }
  //Ouvidor de mudança
  function listenForChange() {
    html.links.forEach((tab) => {
      tab.addEventListener("click", selectTab);
    });
  }
  //iniciar o codigo inteiro, ele vai executar os passos
  function init() {
    hideAllTabContent();
    listenForChange();
    html.openTab.click();
  }

  return {
    init,
  };
}

window.addEventListener("load", () => {
  const tabNavigation = TabNavigation();
  tabNavigation.init();
});
