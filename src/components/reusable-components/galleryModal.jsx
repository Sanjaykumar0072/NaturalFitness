import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const GalleryModal = ({ imgSrc, totalImages, buttonTitle, buttonClass }) => {
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadImages = () => {
            const loadedImages = [];
            for (let i = 1; i <= totalImages; i++) {
                loadedImages.push(`${imgSrc}/${i}.jpeg`);
            }
            setImages(loadedImages);
            setLoading(false);
        };
        loadImages();
    }, [imgSrc, totalImages]);

    const openModal = (index) => {
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setCurrentIndex(null);
    };

    const findPrev = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const findNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const handleKeyDown = useCallback((e) => {
        if (e.keyCode === 27) closeModal();
        if (e.keyCode === 37 && currentIndex > 0) findPrev();
        if (e.keyCode === 39 && currentIndex + 1 < images.length) findNext();
    }, [currentIndex, images.length]);

    useEffect(() => {
        document.body.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <>
            {loading ? (
                <div className="loader">
                    <div></div>
                </div>
            ) : (
                <button onClick={() => openModal(0)} className={buttonClass}>
                    {buttonTitle}
                </button>
            )}
            {currentIndex !== null && (
                <div>
                    <div className="modal-overlay" onClick={closeModal}></div>
                    <div className="modal">
                        <div className='modal-body'>
                            <button className='modal-close' onClick={closeModal}>&times;</button>
                            {currentIndex > 0 && (
                                <button className='modal-prev' onClick={findPrev}>&lsaquo;</button>
                            )}
                            {currentIndex + 1 < images.length && (
                                <button className='modal-next' onClick={findNext}>&rsaquo;</button>
                            )}
                            <img src={images[currentIndex]} alt={`${currentIndex + 1}.jpg`} />
                            <sup>{currentIndex + 1}/{images.length}</sup>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

GalleryModal.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    totalImages: PropTypes.number.isRequired,
    buttonClass: PropTypes.string,
    buttonTitle: PropTypes.string.isRequired,
};

export default GalleryModal;
