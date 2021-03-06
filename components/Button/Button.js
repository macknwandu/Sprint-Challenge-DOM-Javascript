class Button {
    constructor(element) {
        this.element = element;

        this.element.addEventListener('click', () => {
            this.element.style.display = "none";
        });
    }
}

let buttons = document.querySelectorAll('.Button');
buttons = Array.from(buttons).map(button =>  new Button(button));
