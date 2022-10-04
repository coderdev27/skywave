import React from 'react'
import 'normalize.css'
import "./App.scss"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Collection from './pages/collection/Collection';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ExploreNFT from './pages/explore/ExploreNFT';
import { ModalContext } from './hooks/ModalContext'
import { createContext, useState, useContext } from 'react'
import BuyModal from './components/buyModal/BuyModal';




const App = () => {

  const {showModal,
    setShowModal,
    selectedNft,
    handleShowModal, } = useContext(ModalContext)

  return (
    <BrowserRouter>
      <Navbar />
      {
        showModal && (
          <BuyModal selectedNft={selectedNft} showModal={showModal} setShowModal={setShowModal} />
        )
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/explore" element={<ExploreNFT />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App