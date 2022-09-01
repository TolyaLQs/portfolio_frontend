language_ru = [
//top-nav
    ['nav_home', 'Превью'],
    ['nav_portfolio', 'Портфолио'],
    ['nav_name', 'lQSTolya'],
    ['nav_about', 'Обо мне'],
    ['nav_contacts', 'Контакты'],
// preview
    ['preview_title1', 'Привет, меня зовут'],
    ['preview_title2', 'lQSTolya.'],
// portfolio
    ['portfolio_title', 'Портфолио'],
    ['portfolio_btn_show', 'Развернуть'],
    ['portfolio_btn_hide', 'Скрыть'],
// about
    ['about_title', 'Обо мне'],
    ['about_text', '123'],
// contact
    ['contact_phone', 'Телефон: 89195946352'],
    ['contact_top', 'Вверх'],
]

language_en = [
//top-nav
    ['nav_home','Home'],
    ['nav_portfolio', 'Portfolio'],
    ['nav_name', 'lQSTolya'],
    ['nav_about', 'About me'],
    ['nav_contacts', 'Contacts'],
// preview
    ['preview_title1', 'Hello, i am'],
    ['preview_title2', 'lQSTolya.'],
// portfolio
    ['portfolio_title', 'Portfolio'],
    ['portfolio_btn_show', 'Show works'],
    ['portfolio_btn_hide', 'Hide works'],
// about
    ['about_title', 'About me'],
    ['about_text', '321'],
// contact
    ['contact_phone','Phone: 89195946352'],
    ['contact_top', 'To top'],
]

function update_lang(lang){
    lang.forEach(function(key, value){
        element = document.querySelector('#'+key[0]);
        element.innerHTML = key[1];
    })
}

function language(){
    let nav_lang = document.querySelector('.top-nav-language-right');
    lang = nav_lang.childNodes[1].textContent;
    if (lang == 'ru'){
        update_lang(language_ru);
    }else if (lang == 'en'){
        update_lang(language_en);
    }

}

window.onload = function(){
    language();
    let nav_lang = document.querySelector('.top-nav-language-right');
    let nav_lang_section = document.querySelector('.language-section-absolute');
    nav_lang.addEventListener('mouseover',function(el){
        nav_lang_section.style.display = 'flex';
//        console.log(nav_lang_section.childNodes);
        children_section = nav_lang_section.childNodes;
        children_section.forEach(function(elem){
            elem.addEventListener('click',function(span_elem){
                title_lang = nav_lang.childNodes[1].textContent;
                get_lang = span_elem.target.textContent;
                if (title_lang != get_lang){
                    nav_lang.childNodes[1].innerHTML = span_elem.target.textContent;
                    language();
                }

            })
        })
    })
    nav_lang.addEventListener('mouseout',function(el){
        nav_lang_section.style.display = 'none';
    })

}