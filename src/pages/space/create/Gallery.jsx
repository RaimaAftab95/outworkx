import { useCreateSpaceContext } from '../../../hooks/useCreateSpaceContext';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuthContext } from '../../../hooks/useAuthContext';

const { VITE_BACKEND_API } = import.meta.env;

export default function Gallery() {
  const [spaceImages, setSpaceImages] = useState([]);

  const { dispatch } = useCreateSpaceContext();
  const { token } = useAuthContext();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  /**
   * Upload images to the server
   * @param {import('react').SyntheticEvent} e Event
   * @returns {void}
   */
  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);

    if (files.length === 0) {
      toast.error('Please select at least one image to upload.');
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append('media', file);
    });

    toast.promise(
      fetch(`${VITE_BACKEND_API}/v1/media/upload`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token || ''}`
        },
        body: formData
      }).then(async (response) => {
        if (!response.ok) {
          throw new Error('Failed to upload');
        }

        const data = await response.json();
        const uploadedImages = data?.data?.media.map((url) => ({
          url,
          type: 'image'
        }));

        setSpaceImages(uploadedImages);

        return 'Images uploaded successfully.';
      }),
      {
        loading: 'Uploading images...',
        success: 'Images uploaded successfully.',
        error: 'Failed to upload images.'
      }
    );
  };

  /**
   * Handle form submission
   * @param {import('react').SyntheticEvent} e Event
   * @returns {void}
   */
  function handleSubmit(e) {
    e.preventDefault();

    if (spaceImages.length === 0) {
      toast.error('Please upload at least one image.');
      return;
    }
    if (spaceImages.length < 3) {
      toast.error('Please upload at least 3 images.');
      return;
    }

    dispatch({
      type: 'SET_GALLERY',
      payload: {
        gallery: spaceImages
      }
    });

    navigate('/space/create/availability');
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-2">
      <div className="mb-6 flex w-full items-center justify-between">
        <h2 className="text-primary text-2xl font-bold">Gallery</h2>
        <button className="bg-primary rounded-full border border-transparent px-6 py-2 font-medium transition-all">
          Save & Exit
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-8">
        <div className="bg-customGray relative flex h-96 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed p-4">
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
            className="rounded-md border px-4 py-2"
            onClick={() => navigate('/space/create/location')}
          >
            Previous
          </button>
          <button type="submit" className="rounded-md border px-4 py-2">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
