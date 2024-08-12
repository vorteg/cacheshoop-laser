import React, { useState, useEffect } from 'react';
import type { ImageDetails } from '../types';
import Modal from './Modal';

const PAGE_SIZE = 20;

const Gallery: React.FC = () => {
  const [ allImages, setAllImages ] = useState<ImageDetails[]>( [] );
  const [ images, setImages ] = useState<ImageDetails[]>( [] );
  const [ searchTerm, setSearchTerm ] = useState( '' );
  const [ selectedImage, setSelectedImage ] = useState<ImageDetails | null>( null );
  const [ showModal, setShowModal ] = useState( false );
  const [ page, setPage ] = useState( 1 );
  const [ isLoading, setIsLoading ] = useState( false );
  const [ whatsappUrl, setwhatsappUrl ] = useState( '' );

  useEffect( () => {
    const fetchImages = async () => {
      try {
        const response = await fetch( '/images.json' );
        const result = await response.json();

        setAllImages( result );
        setImages( result.slice( 0, PAGE_SIZE ) );
      } catch ( error ) {
        console.error( 'Error fetching images:', error );
      }
    };

    fetchImages();
  }, [] );

  useEffect( () => {
    const filteredImages = allImages.filter( ( image: ImageDetails ) =>
      image.public_id.toLowerCase().includes( searchTerm.toLowerCase() )
    );

    setImages( filteredImages.slice( 0, page * PAGE_SIZE ) );
  }, [ searchTerm, page, allImages ] );

  useEffect( () => {
    const handleScroll = () => {
      if ( window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !isLoading ) {
        setIsLoading( true );
        setPage( ( prevPage ) => prevPage + 1 );
        setIsLoading( false );
      }
    };

    window.addEventListener( 'scroll', handleScroll );
    return () => window.removeEventListener( 'scroll', handleScroll );
  }, [ isLoading ] );

  const handleSearchChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setSearchTerm( event.target.value );
    setPage( 1 ); // Reset page to 1 on new search
  };

  const openModal = ( image: ImageDetails ) => {
    setSelectedImage( image );
    const whatsappNumber = '3318444445'; // Reemplaza con tu número de WhatsApp
    const message = `Hola, estoy interesado en este producto: ${image.public_id}`;
    setwhatsappUrl( `https://wa.me/${whatsappNumber}?text=${encodeURIComponent( message )}` )

  };

  const closeModal = () => {
    setSelectedImage( null );
  };

  const toggleModal = () => {
    setShowModal( !showModal );
  };


  return (
    <>
      <div id="wrapper">
        <header id="header">
          <h3>Cacheshoop - Corte y Grabado Laser.</h3>
          <div className="search-bar">
            <input
              type="text"
              className="searchInput"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#" onClick={( event ) => { event.preventDefault(); toggleModal() }}>
                  <h5 >Nosotros</h5> <i className="fas fa-info-circle"></i>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <Modal showModal={showModal} closeModal={toggleModal} />
      </div >
      <div className='container-gallery'>
        <div className='gallery-grid'>
          {images.map( ( data: ImageDetails ) => (
            <article className="thumb" key={data.public_id}>
              <a className="image" href="#" onClick={( event ) => { event.preventDefault(); openModal( data ); }}>
                <img
                  src={data.url}
                  width="1200"
                  height="750"
                  alt={`${data.public_id}`}
                  loading="lazy"
                />
                <div className="overlay">
                  <h5>{data.public_id}</h5>
                </div>
              </a>
              <p className="description">Descripcion IMG</p>
            </article>
          ) )}
        </div>
      </div>
      {

        selectedImage && (
          <div className='modal2' onClick={closeModal}>
            <div className='modal-content2' onClick={( e ) => e.stopPropagation()}>
              <span className="close2" onClick={closeModal}>&times;</span>
              <img className="modal-image2" src={selectedImage.url} alt={selectedImage.public_id} />
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="quote-button">Cotizar</a>
            </div>
          </div>
        )
      }

    </>

  );
};

export default Gallery;
