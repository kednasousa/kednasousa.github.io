const tabs = document.querySelectorAll('.tab__btn');

const tabClicked = (tab) => {
  tabs.forEach(tab => tab.classList.remove('active'));
  tab.classList.add('active');

  const contents = document.querySelectorAll('.content');

  contents.forEach(content => content.classList.remove('show'));

  const contentId = tab.getAttribute('content-id');
  const content = document.getElementById(contentId);

  content.classList.add('show');
}

const navigateTabs = (key, currentTab) => {
  const currentIndex = Array.prototype.indexOf.call(tabs, currentTab);
  let newIndex;
  if (key === 'ArrowRight') {
    newIndex = (currentIndex + 1) % tabs.length;
  } else if (key === 'ArrowLeft') {
    newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
  }
  tabs[newIndex].focus();
}

tabs.forEach(tab => {
  tab.setAttribute('tabindex', '0'); // Torna os botões focáveis via teclado
  tab.addEventListener('click', () => tabClicked(tab));
  tab.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      tabClicked(tab);
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      navigateTabs(e.key, tab);
    }
  });
});

const currentActiveTab = document.querySelector('.tab__btn.active');
tabClicked(currentActiveTab);