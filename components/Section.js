export class Section {
    constructor({data: items, renderer}, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems() {
        this._renderedItems.forEach(item => this._renderer(item));
            // const card = new Card ({name, link}, '.card-template', () => openPhotoPopup.openPhoto(name, link));
            // const cardElement = card.generateCard()
            // this.setItem(cardElement)
    }

    setItem(element) {
        this._container.append(element);
    }
}