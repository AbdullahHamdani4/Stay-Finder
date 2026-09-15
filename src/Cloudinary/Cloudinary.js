import axios from "axios";

const imageURl = async (imageurlForCloudinary) => {
  try {
    const formData = new FormData();

    formData.append("file", imageurlForCloudinary);

    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
    );

    const responseFromCloudinary = await axios.post(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData,
    );

    return responseFromCloudinary.data.secure_url
  } catch (error) {
     console.log(error);
     
  }
};

export default imageURl