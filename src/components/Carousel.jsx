import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import useWindowWidth from "../hooks/useWindowWidth";

const ResponsiveCarousel = ({ images, imgStyles }) => {
  // State to store the screen width
  const windowWidth = useWindowWidth();

  // Function to group images into pairs for larger screens or single images for smaller screens
  const groupImages = (images, groupSize) => {
    const groups = [];
    for (let i = 0; i < images.length; i += groupSize) {
      groups.push(images.slice(i, i + groupSize));
    }
    return groups;
  };

  // Determine group size based on screen width
  const groupSize = windowWidth < 768 ? 1 : 2;
  const groupedImages = groupImages(images, groupSize);
  console.log(windowWidth);
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      transitionTime={500}
      emulateTouch={true}
      swipeable={true}
      showStatus={false}
      dynamicHeight={false}
    >
      {groupedImages.map((group, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "400px", // Fixed height for consistency
            ...imgStyles, // Apply custom styles
          }}
        >
          {group.map((image, idx) => (
            <div
              key={idx}
              style={{
                flex: `1 0 ${100 / groupSize}%`,
                padding: "0.2rem",
                boxSizing: "border-box", // Ensure padding is included in width
                height: "100%",
              }}
            >
              <img
                src={image.src}
                alt={`Slide ${index * groupSize + idx + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default ResponsiveCarousel;
