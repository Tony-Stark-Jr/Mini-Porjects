const trigger = document.querySelector(".main__btn")
const modalWrapper = document.querySelector(".modal__wrapper")
const closeBtn = document.querySelector('.closer')

trigger.addEventListener('click', () => openModal());

closeBtn.addEventListener('click', () => closeModal());


modalWrapper.addEventListener('click', function (e) {
    if (e.target !== this) {
        return;
    }
    closeModal()
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal()
    }
});

function openModal() {
    return modalWrapper.classList.add("active")
}

function closeModal() {
    modalWrapper.classList.remove("active")
}

