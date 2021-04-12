import $ from 'jquery';
class Modal {
    constructor() {
        this.openmodalButton = $(".open-modal");
        this.modal = $(".modal");
        this.modalCloseButton = $(".modal-close");
        this.events();
    }
    events() {
        this.openmodalButton.click(this.openmodal.bind(this));
        this.modalCloseButton.click(this.closemodal.bind(this));
        $(document).keyup(this.keyPressHandler.bind(this));
    }
    openmodal() {
        this.modal.addClass('modal-is-visible');
        return false;
    }
    closemodal() {
        this.modal.removeClass('modal-is-visible');
    }
    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closemodal();
        }
    }
}
export default Modal;