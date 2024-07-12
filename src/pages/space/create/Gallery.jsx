import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import { useCreateSpaceContext } from '../../../hooks/useCreateSpaceContext';
import { useNavigate } from 'react-router-dom';

const { VITE_BACKEND_API } = import.meta.env;

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [spaceImages, setSpaceImages] = useState([]);
  const [showError, setShowError] = useState(false);
  const { dispatch, auth } = useCreateSpaceContext();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const uploadImagesHandler = async () => {
    if (images.length === 0) {
      toast.error('Please select at least one image to upload.');
      return;
    }

    const formData = new FormData();
    images.forEach((file) => {
      formData.append('media', file);
    });

    try {
      const response = await fetch(`${VITE_BACKEND_API}/v1/media/upload`, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${auth?.token || ''}` // Include Bearer token
        }
      });

      if (!response.ok) {
        throw new Error('Failed to upload images');
      }

      const data = await response.json();
      const uploadedImages = data?.data?.media.map((url) => ({
        url,
        type: 'image'
      }));

      setSpaceImages(uploadedImages);
      toast.success('Images uploaded successfully.');
    } catch (error) {
      console.error('Upload error', error);
      toast.error('Failed to upload images.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (spaceImages.length < 3) {
      setShowError(true);
      return;
    }

    setShowError(false);

    // Format spaceImages to match the expected structure
    const formattedImages = spaceImages.map((image) => ({
      type: 'image',
      url: image.url
    }));

    dispatch({
      type: 'SET_GALLERY',
      payload: {
        gallery: formattedImages
      }
    });

    navigate('/space/create/availability');
  };

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
            onChange={handleFileChange}
          />
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mb-2 size-12 text-4xl"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            <p className="mt-2 text-lg">Drag files to upload</p>
            <p className="mt-1 text-sm font-medium">Choose at least 3 photos</p>
          </div>
        </div>
        {showError && spaceImages.length < 3 && (
          <p className="mt-2 text-sm text-red-500">
            Please upload at least 3 images of the space.
          </p>
        )}
        {spaceImages.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {spaceImages.map((image, index) => (
              <img
                key={index}
                className="rounded-xl"
                src={image.url}
                alt={`uploaded-${index}`}
              />
            ))}
          </div>
        )}
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            className="rounded-md bg-blue-500 px-4 py-2 text-white"
            onClick={() => navigate('/space/create/location')}
          >
            Previous
          </button>
          <button
            type="submit"
            className="rounded-md bg-blue-500 px-4 py-2 text-white"
            onClick={uploadImagesHandler}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
