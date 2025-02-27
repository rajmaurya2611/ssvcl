import { Row, Col } from "antd";
import img1 from "../../assets/gallery/1.png";
import img2 from "../../assets/gallery/2.png";
import img3 from "../../assets/gallery/3.png";
import img4 from "../../assets/gallery/4.png";
import img5 from "../../assets/gallery/5.png";
import img6 from "../../assets/gallery/6.png";
import img7 from "../../assets/gallery/7.png";
import img8 from "../../assets/gallery/8.png";
import img9 from "../../assets/gallery/9.png";
import img10 from "../../assets/gallery/10.png";
import img11 from "../../assets/gallery/11.png";
import img12 from "../../assets/gallery/12.png";
import img13 from "../../assets/gallery/13.png";
import img14 from "../../assets/gallery/14.png";
import img15 from "../../assets/gallery/15.png";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,img1 
];

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 overflow-hidden">
      {/* Centered Heading */}
      <Row justify="center">
        <h1 className="text-black text-center text-[40px] font-montserrat font-light py-14">
          Our Work <span className="font-semibold">Gallery</span>
        </h1>
      </Row>

      {/* Responsive Grid Layout */}
      <Row gutter={[20, 20]} justify="center" className="flex flex-wrap px-16">
        {images.map((img, index) => (
          <Col key={index} xs={12} sm={8} md={8} lg={6} xl={6}>
            <img
              src={img}
              alt={`Gallery ${index}`}
              className="w-full h-auto rounded-2xl shadow-md"
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
