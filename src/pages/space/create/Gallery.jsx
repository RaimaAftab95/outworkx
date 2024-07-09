import { useState } from 'react';
import { useCreateSpaceContext } from '../../../hooks/useCreateSpaceContext';
import { useNavigate } from 'react-router-dom';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const { dispatch } = useCreateSpaceContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: 'SET_GALLERY',
      payload: {
        gallery: images
      }
    });

    navigate('/space/create/highlights');
  }

  function handleImageUpload(e) {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  }

  return (
    <div>
      <h2 className="text-primary text-2xl font-bold">Gallery</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <input
          type="file"
          multiple
          className="border-primary text-primary/70 block w-full rounded-lg border px-9 py-4 outline-none"
          onChange={handleImageUpload}
        />
        <button
          type="submit"
          className="bg-primary rounded-lg py-4 text-lg font-bold"
        >
          Next
        </button>
      </form>
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
    </div>
  );
}
