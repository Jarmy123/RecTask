import React from 'react';

const Modal = ({
	isVisible,
	setIsVisible,
	handleSubmit,
}: {
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	handleSubmit: any;
}) => {
	const closeModal = () => {
		setIsVisible(false);
	};

	const handleSubmitAndCloseModal = () => {
		handleSubmit();
		closeModal();
	};
	return (
		<div className={isVisible ? 'modal-box' : 'hide-modal'}>
			<div className="modal-btn-container">
				<input
					type="submit"
					className="btn btn-accept"
					onClick={handleSubmitAndCloseModal}
				></input>
				<button className="btn btn-back" onClick={closeModal}>
					Go Back
				</button>
			</div>
		</div>
	);
};

export default Modal;
