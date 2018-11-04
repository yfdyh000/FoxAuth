const getI18nMessage = (strName = "") => {
    const message = browser.i18n.getMessage(strName);
    if (message === "") {
        return strName;
    }
    return message;
}

for (let elem of document.querySelectorAll("[data-i18n]")) {
    elem.textContent = getI18nMessage(`l10n_${elem.dataset['i18n']}`);
}
for (let elem of document.querySelectorAll("[data-title-i18n]")) {
    elem.title = getI18nMessage(`l10n_${elem.dataset['titleI18n']}`);
}
for (let elem of document.querySelectorAll("[data-html-i18n]")) {
    elem.innerHTML = getI18nMessage(`l10n_${elem.dataset['htmlI18n']}`);
}
