const getI18nMessage = (strName = "") => {
    const message = browser.i18n.getMessage(strName);
    if (message === "") {
        return strName;
    }
    return message;
}

for (let elem of document.querySelectorAll("[data-i18n]")) {
    elem.textContent = getI18nMessage(`elem_${elem.dataset['i18n']}`);
}
for (let elem of document.querySelectorAll("[data-title-i18n]")) {
    elem.title = getI18nMessage(`elem_${elem.dataset['title-i18n']}`);
}
