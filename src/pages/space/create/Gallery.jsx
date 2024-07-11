import { useState, useRef } from 'react';
import { useCreateSpaceContext } from '../../../hooks/useCreateSpaceContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [showError, setShowError] = useState(false); // State to manage error message display
  const { dispatch } = useCreateSpaceContext();
  const navigate = useNavigate();
  const fileInputRef = useRef(null); // Reference to file input element

  /**
   * Handle form submission for the gallery
   * @param {import('react').SyntheticEvent} e Event
   * @returns {void}
   */
  function handleSubmit(e) {
    e.preventDefault();

    if (images.length < 3) {
      setShowError(true); // Show error message if fewer than 3 images are selected
      fileInputRef.current.value = null; // Clear file input
      return;
    }

    setShowError(false); // Hide error message
    dispatch({
      type: 'SET_GALLERY',
      payload: {
        gallery: images
      }
    });

    navigate('/space/create/availability');
  }

  /**
   * Handle image upload
   * @param {import('react').SyntheticEvent} e Event
   * @returns {void}
   */
  function handleImageUpload(e) {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  }

  return (
    <div className="bg-gray-100 flex min-h-screen flex-col items-center justify-center p-2">
      <div className="mb-6 flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold text-primary">Gallery</h2>
        <button
          className="rounded-full border border-transparent bg-primary px-6 py-2 
        font-medium text-white transition-all hover:border-gray hover:bg-transparent hover:text-primary"
        >
          Save & Exit
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-8">
        <div className="relative flex h-96 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed bg-customGray p-4">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="absolute h-full w-full cursor-pointer opacity-0"
            onChange={handleImageUpload}
          />
          <div className="text-center">
            <FontAwesomeIcon
              icon={faArrowUpFromBracket}
              className="mb-2 text-4xl"
            />
            <p className="mt-2 text-xl">Drag files to upload</p>
            <p className="mt-1 text-lg font-medium">Choose at least 3 photos</p>
          </div>
        </div>
        {showError && images.length < 3 && (
          <p className="mt-2 text-sm text-red-500">
            Please upload at least 3 images of the space.
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-4">
          {images.map((image, index) => (
            <div key={index} className="h-24 w-24">
              <img
                src={URL.createObjectURL(image)}
                alt={`Uploaded ${index}`}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-end gap-4">
          <button
            type="submit"
            className="rounded-full border border-transparent bg-primary px-6 py-2 
        font-medium text-white transition-all hover:border-gray hover:bg-transparent hover:text-primary"
          >
            Previous
          </button>
          <button
            type="submit"
            className="rounded-full border border-transparent bg-primary px-6 py-2 
        font-medium text-white transition-all hover:border-gray hover:bg-transparent hover:text-primary"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
