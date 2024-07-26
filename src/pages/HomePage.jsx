/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import CustomCarousel from "../components/Carousel";
function HomePage() {
  const images = [
    { src: "/images/injured-animal.jpg" },
    { src: "/images/injured-animal2.jpg" },
    { src: "/images/injured-animal3.jpg" },
    { src: "/images/injured-animal4.jpg" },
    { src: "/images/ngo-people.jpg" },
  ];
  return (
    <div className="home-page">
      <div className="carousel">
        <CustomCarousel
          images={images}
          imgStyles={{ display: "flex", height: "500px" }}
        />
      </div>
      <section className="welcome">
        <div>
          <h1>
            Welcome to
            <span style={{ color: "#3acf50" }}> Animal Rescue </span>
            Hub
          </h1>
          <p>
            At Animal Rescue Hub, we believe every animal deserves a chance. Our
            platform connects concerned individuals with nearby NGOs to ensure
            injured animals receive the care they need.
          </p>
        </div>
        <img src="/images/welcome.jpg" alt="" />
      </section>
      <section className="easy-reporting">
        <div className="d-flex flex-column gap-400">
          <h1 style={{ color: "white" }}>
            <span style={{ color: "#3acf50" }}>Easy</span> Reporting
          </h1>
          <p style={{ color: "white" }}>
            Spot an injured animal? Report it quickly using our simple form.
            Just provide the animal&apos; location and condition, and we'll
            handle the rest.
          </p>
          <button className="btn">
            <Link
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                color: "white",
                textDecoration: "none",
              }}
              to="/report-incident"
            >
              Report new
            </Link>
          </button>
        </div>
        <img
          className="radius-400"
          src="/images/animal-rescue-hero-section.jpg"
          alt=""
        />
        {/* <img src="/images/hero-2.jpeg" /> */}
      </section>
      <section className="cases-solved">
        <div>
          <h1>
            <span style={{ color: "#3acf50" }}>Empact</span> of working together
          </h1>
          <p>
            {" "}
            Together, we've made significant strides in rescuing and
            rehabilitating injured animals. Here's how our collaborative efforts
            are making a difference:
          </p>
        </div>
        <div>
          <CustomCarousel
            images={images}
            imgStyles={{ display: "flex", height: "300px" }}
          />
        </div>
      </section>

      <section className="our-colloborators">
        <div className="d-flex flex-column gap-400">
          <h1 className="">
            NGO <span style={{ color: "#3acf50" }}>Colloboration</span>
          </h1>
          <p>
            Our platform connects reports with NGOs in the area, ensuring that
            help is on the way. We bridge the gap between those in need and
            those who can help.
          </p>
          <button className="btn">
            <Link
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                color: "white",
                textDecoration: "none",
              }}
              to="/register-ngo"
            >
              Register NGO
            </Link>
          </button>
        </div>

        <div>
          <img className="radius-400" src="/images/ngo-people.jpg" alt="" />
        </div>
      </section>
      <section className="real-time-alerts">
        <div className="d-flex flex-column gap-500">
          <h1>
            Real-Time <span style={{ color: "#3acf50" }}>Alerts</span>
          </h1>
          <p>
            Receive immediate notifications for every report. Our system ensures
            that NGOs can respond swiftly to animal emergencies.
          </p>
        </div>
        <img className="radius-400" src="/images/alert.jpg" alt="" />
      </section>
    </div>
  );
}

export default HomePage;
