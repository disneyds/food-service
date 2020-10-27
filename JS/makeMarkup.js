import tamplate from '../src/template/menu-card.hbs'
import menu from '../src/menu.json'


const makeMarkupForMenu = function (menu) {
    return menu.map(tamplate).join('')
}
export const menuMarkup = makeMarkupForMenu(menu);



