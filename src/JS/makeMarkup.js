import tamplate from '../template/menu-card.hbs'
import menu from '../menu.json'


const makeMarkupForMenu = function (menu) {
    return menu.map(tamplate).join('')
}
export const menuMarkup = makeMarkupForMenu(menu);



