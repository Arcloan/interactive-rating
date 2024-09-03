let buttons = document.querySelectorAll(".value_button");

buttons.forEach((el) => {
    el.addEventListener("click", (e) => {
        buttons.forEach((btn) => {
            btn.dataset.selected = "false";
        })
        e.target.dataset.selected = "true";
    })
    el.addEventListener("keydown", (e) => {
        if (!(e.key === "Enter")) {return;}
        buttons.forEach((btn) => {
            btn.dataset.selected = "false";
        })
        e.target.dataset.selected = "true";
    })
})

let submit = document.querySelector(".submit_button");

submit.addEventListener("click", (e) => {
    if (! Array.from(buttons).some((btn) => {
        return btn.dataset.selected === "true";
    })) {return ;}
    let chosen = Number(document.querySelector('[data-selected="true"] p').textContent);
    document.querySelector(".output span").textContent = chosen;
    document.querySelector(".thank_you").classList.remove("hidden");

})