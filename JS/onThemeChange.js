import { Theme, refs } from './refs'

refs.checkbox.addEventListener('change', onThemeChange);


if (localStorage.getItem('theme') === Theme.DARK) {
    refs.body.classList.add(Theme.DARK)
    localStorage.setItem('theme', refs.body.classList.value)
    refs.checkbox.checked = true;
} else {
    refs.body.classList.add(Theme.LIGHT)
    localStorage.setItem("theme", refs.body.classList.value)
 }


function onThemeChange(e) {
    
    refs.body.classList.toggle(Theme.LIGHT)
    refs.body.classList.toggle(Theme.DARK)

    localStorage.setItem("theme", refs.body.classList.value)
    
};