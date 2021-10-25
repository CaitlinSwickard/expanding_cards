const panels = document.querySelectorAll('.panel');

// function to add class 'active' once the panel has been clicked
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active');
  })
});

// a function to remove the class 'active' from panels once a new panel has been clicked
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  })
};