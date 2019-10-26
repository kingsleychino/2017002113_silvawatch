const shareArticle = document.querySelector('.article-share');
const faIcon = document.querySelectorAll('.fa-fab');

shareArticle.addEventListener('mouseover', () => {
  faIcon.forEach(icon => (icon.style.display = 'block'));
});

shareArticle.addEventListener('mouseout', () => {
  faIcon.forEach(icon => (icon.style.display = 'none'));
});
