import { FC } from 'react';
import { modalType } from '../types';
import PrimaryModal from './../';

class ModalClass {
	private modal: FC<modalType>;
	private params: modalType;

	constructor(modalComponent: FC<modalType>) {
		this.modal = modalComponent;
		this.params = {};
	}

	public show({ ...args }: modalType) {
		this.params = { ...args };
		return this.modal({ ...args });
	}
}

export const Modal = new ModalClass(PrimaryModal);
