import { FC } from 'react';
import { modalType } from '../types';
import PrimaryModal from './../';

class ModalClass {
	private modal: FC<modalType>;

	constructor(ModalComponent: FC<modalType>) {
		this.modal = ModalComponent;
	}

	public show({ ...args }: modalType) {
		return this.modal({ ...args });
	}
}

export const Modal = new ModalClass(PrimaryModal);
