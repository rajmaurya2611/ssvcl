import { Row, Col } from "antd";
import BgImg from "../../assets/Ourservices/bg.png";
import ServiceImg from "../../assets/Ourservices/serviceimg.png";

export default function OurServices() {
  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000529] bg-opacity-50"></div>

      {/* White Content Box - Centered */}
      <div className="relative z-10 bg-white p-10 mt-14 w-[80%] max-w-7xl shadow-lg flex flex-col justify-center items-center ">
        <Row gutter={[20, 20]} align="middle" className="w-full">
          {/* Left Column - Image */}
          <Col xs={24} md={13} className="flex justify-center">
            <img src={ServiceImg} alt="Service" className="w-[98%] h-auto " />
          </Col>

          {/* Right Column - Text */}
          <Col xs={24} md={11} className="font-montserrat">
            <h2 className="text-6xl font-light text-[#000529]  mb-4 text-center md:text-left">
              Our <span className="font-semibold">Services</span>
            </h2>
            <p className="text-xl text-[000529] font-semibold  pt-4 text-center md:text-left">
            With over 30 years of experience in the construction industry, we take pride in delivering high-quality, reliable, and innovative construction solutions. 
            </p>
            <p className="text-xl text-[000529] pt-10 font-regular  text-center md:text-left">
            We have successfully completed 200+ projects, covering 5000+ square feet of built-up area. Our expertise spans residential, commercial, and industrial construction, ensuring top-tier craftsmanship and durability.
Serving Lucknow and nearby areas, we have built a reputation for excellence, precision, and timely delivery. 
            </p>
            <button className="bg-[#FDBA00]  text-white  text-2xl font-medium px-8 py-4 rounded-full mt-4">
  Explore
</button>

          </Col>
        </Row>
      </div>
    </div>
  );
}
