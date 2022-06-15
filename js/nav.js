const navPrimaria =  document.querySelector('.nav-primaria');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = navPrimaria.getAttribute('data-visible')

    if (visibility === "false") {
        navPrimaria.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        navPrimaria.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})