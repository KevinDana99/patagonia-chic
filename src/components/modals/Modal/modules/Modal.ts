import { FC } from 'react';
import { modalType } from '../types';
import PrimaryModal from './../';

class ModalClass {
	private modal: FC<modalType>;

	constructor(modalComponent: FC<modalType>) {
		this.modal = modalComponent;
	}

	public show({ ...args }: modalType) {
		return this.modal({ ...args });
	}
}

export const Modal = new ModalClass(PrimaryModal);
