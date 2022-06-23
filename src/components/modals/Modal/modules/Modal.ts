class ModalClass {
	private modalShow: boolean;

	constructor() {
		this.modalShow = false;
	}

	public show(): void {
		!this.modalShow ? (this.modalShow = true) : false;

		alert(this.modalShow);
	}
}

const Modal = new ModalClass();

export default Modal;
