const Base64Image = () => {
  const convertImage = ({ image }) => {
    const base64String = btoa(
      String.fromCharCode(...new Uint8Array(image?.data))
    );
    const base64Image = `data:image/png;base64,${base64String}`;

    return base64Image;
  };

  return {
    convertImage,
  };
};

export default Base64Image;
