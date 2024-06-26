import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthStore } from '../../../store';
import { uploadImages } from '../../http/api';
import Heading from '../shared/Heading';
import Button from '../ui/Button';
import Error from '../ui/Error';
import InputBox from '../ui/InputBox';

const SpaceMoreInformation = ({
  setActiveTab,
  setSpaceDetails,
  spaceDetails,
  isPending,
  createSpace
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [spaceImages, setSpaceImages] = useState([]);
  const [errors, setErrors] = useState({});

  // get user details
  const { auth } = useAuthStore();
  const { user } = auth || {};

  // handle selecte images
  const handleFileChange = async (e) => {
    const files = e.target.files;
    setImages(files);
  };

  // upload space images
  const uploadImagesHandler = async () => {
    const formdata = new FormData();

    for (const item of images) {
      formdata.append(`media`, item, item?.name);
    }

    const { data } = await uploadImages(formdata);

    return data;
  };

  // create server request
  const { mutate, isPending: isUploading } = useMutation({
    mutationKey: ['upload-images'],
    mutationFn: uploadImagesHandler,
    onSuccess: async (data) => {
      console.log('data', data);
      setSpaceImages(data?.data?.media);
      toast.success('Space Images Upload Successfull.');
    },
    onError: async (error) => {
      console.log('error', error);
    }
  });

  useEffect(() => {
    if (images?.length > 0) {
      mutate();
      console.log('iamges', images);
    }
  }, [images, mutate]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationErrors = {};

    if (!name) {
      validationErrors.name = 'Title is Required!';
    }

    if (spaceImages?.length === 0) {
      validationErrors.spaceImages = 'Space Images is Required!';
    }

    if (!description) {
      validationErrors.description = 'Description is Required!';
    }

    if (Object.keys(validationErrors)?.length > 0) {
      return setErrors(validationErrors);
    }

    // generate gellary images
    const galleryImages = spaceImages?.map((image) => ({
      type: 'image',
      url: image
    }));

    setSpaceDetails({
      ...spaceDetails,
      name,
      description,
      addressHint: 'test address hint',
      city: 'Noakhali',
      state: 'Chattogram',
      country: 'Bangladesh',
      postalCode: 3860,
      gallery: galleryImages,
      numberOfDesks: 5, // Replace with an actual number
      pricePerDesk: 100, // Replace with an actual price
      maximumNumberOfNomads: 10, // Replace with an actual number
      spaceOwner: user?.id, // Replace with an actual ID
      timings: [
        {
          day: 0,
          start: 480, // 8:00 AM
          end: 1020 // 5:00 PM
        },
        {
          day: 1,
          start: 480,
          end: 1020
        },
        {
          day: 2,
          start: 480,
          end: 1020
        },
        {
          day: 3,
          start: 480,
          end: 1020
        },
        {
          day: 4,
          start: 480,
          end: 1020
        },
        {
          day: 5,
          start: 480,
          end: 1020
        }
      ]
    });

    createSpace();
  };
  return (
    <div className="-mt-10">
      <div className="origin-center scale-90 transform ">
        <Heading>Add some photos of your place</Heading>
        <p className="mt-2 text-xl font-medium leading-9">
          {`You'll`} need 5 photos to get started. You can add more or make
          changes later.
        </p>
      </div>
      <form
        onSubmit={submitHandler}
        className="-mt-56 origin-center scale-75 transform"
      >
        <div className="relative -mt-36 flex flex-col items-center justify-center bg-[#F2F2F2] py-28 text-center">
          <div className="flex w-full justify-center">
            <img src="/images/icons/image.png" alt="icon" />
          </div>
          <h4 className="mt-20 text-3xl leading-10">Drag your photos here</h4>
          <span className="text-2xl font-medium leading-9">
            Choose at least 5 photos
          </span>
          <label
            htmlFor="images"
            className="mt-8 cursor-pointer text-2xl font-bold leading-9 underline"
          >
            Upload from your device
          </label>
          <input
            type="file"
            multiple
            id="images"
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full opacity-0"
            onChange={handleFileChange}
          />

          {isUploading && (
            <div className="mt-5 font-semibold">
              <span>Uploading...</span>
            </div>
          )}
        </div>
        <br />
        <Error>{errors?.spaceImages}</Error>

        {spaceImages?.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {spaceImages?.map((image) => (
              <img key={image} className="rounded-xl" src={image} alt={image} />
            ))}
          </div>
        )}

        <div className="mt-20 ">
          <Heading>Let’s give title to your place</Heading>
          <p className="mt-2 text-2xl font-medium leading-9">
            Short titles work best.Have fun with it! You can always change it
            later
          </p>

          <InputBox className="mt-8">
            <textarea
              name=""
              id=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Add your title."
              className="h-32 w-full text-xl font-medium leading-9 text-primary/70 outline-none placeholder:text-primary/70"
            ></textarea>
          </InputBox>
          <span className="mt-8 block text-2xl font-bold leading-9">
            {name?.length}/40
          </span>
          {name?.length > 40 && (
            <Error>Title should not exceed 40 characters.</Error>
          )}
          <Error>{errors?.name}</Error>
        </div>

        <div className="mt-14">
          <Heading>Create your description</Heading>
          <p className="mt-2 text-2xl font-medium leading-9">
            Share what makes your place special.
          </p>

          <InputBox className="mt-8">
            <textarea
              name=""
              id=""
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Take it easy and write your description."
              className="h-56 w-full text-xl font-medium leading-9 text-primary/70 outline-none placeholder:text-primary/70"
            ></textarea>
          </InputBox>
          <span className="mt-8 block text-2xl font-bold leading-9">
            {description?.length}/500
          </span>
          {description?.length > 500 && (
            <Error>Description should not exceed 500 characters.</Error>
          )}
          <Error>{errors?.description}</Error>
        </div>

        <div className="mt-14">
          <Heading>Set your price</Heading>
          <p className="mt-2 text-2xl font-medium leading-9">
            Your address is only shared with guests after they’ve made a
            reservation.
          </p>

          <div className="mt-14">
            <input
              type="text"
              placeholder="Price"
              className="font-nohemi w-full border-none bg-transparent text-center text-8xl font-bold text-primary outline-none placeholder:text-primary"
            />
          </div>

          <div className="mt-12 rounded-3xl border border-gray px-8 py-12">
            <div className="flex flex-col gap-2 border-b border-gray pb-5">
              <div className="flex flex-wrap items-center justify-between gap-5">
                <span className="text-2xl font-medium leading-9">
                  Best Price
                </span>
                <span className="text-2xl font-medium leading-9">
                  $35/Per Person
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-5">
                <span className="text-2xl font-medium leading-9">
                  Guest service fee
                </span>
                <span className="text-2xl font-medium leading-9">$5</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
              <span className="text-2xl font-extrabold leading-9">
                Guest service fee
              </span>
              <span className="text-2xl font-medium leading-9">$40</span>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-gray p-7">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <span className="text-2xl font-extrabold leading-9">
                You earn
              </span>
              <span className="text-2xl font-extrabold leading-9">$34</span>
            </div>
          </div>
        </div>

        <div className="mt-24 flex justify-end gap-5">
          <Button
            className="px-14"
            variant="secondary"
            onClick={() => setActiveTab(1)}
          >
            Back
          </Button>
          <Button
            className="px-14"
            disabled={isPending || isUploading}
            type="submit"
            loading={isPending}
          >
            Publish
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SpaceMoreInformation;
