import { createContext, useState } from "react";

export const ModalContext = createContext();


export const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
	const [selectedNft, setSelectedNft] = useState("");

	const handleShowModal = (nft) => {
		setSelectedNft(nft);
		showModal ? setShowModal(false) : setShowModal(true);
		// console.log('clicked nft');
    // console.log(selectedNft)
	};

  const closeModal = () => {
    console.log('close modal')
    setShowModal(false)
  }

  return (
    <ModalContext.Provider value={{showModal,
      setShowModal,
      selectedNft,
      setSelectedNft,
      closeModal,
      handleShowModal}}>
      {children}
    </ModalContext.Provider>
  );
}