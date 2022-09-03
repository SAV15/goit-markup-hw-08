(() => {
    const menuBtnRef = document.querySelector("[data-pages__button]");
    const mobileMenuRef = document.querySelector("[data-header-page__menu]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        
        menuBtnRef.classList.toggle("pages__button--is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("header-page__menu--is-open");
    })
})();