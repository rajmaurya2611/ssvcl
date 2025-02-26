import { Row, Col } from 'antd';
import HeroImg from "../../assets/hero/Mask group 1.png";

export default function Hero() {
  return (
    <div
      className="h-screen flex items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <Row
        className="w-full mt-[140px] px-5 xl:pl-12"
        justify="start"
        align="middle"
      >
        <Col xs={24} md={12}>
          <h1 className="text-white pl-1 text-5xl font-montserrat font-semibold">
            Shri Siddhi Vinayak
          </h1>
          <h1 className="text-white text-7xl font-montserrat font-semibold">
            Constructions
          </h1>

          <h2 className="text-white pl-1 pt-4 pb-14 text-3xl font-montserrat font-medium">
            Lucknow, Uttar Pradesh
          </h2>

          <p className="text-white pl-1 text-lg font-montserrat italic border-l-4 border-[#FDBA00]">
            “We specialize in houses, commercial complexes,<br />
            warehouses, and all types of civil work. Delivering top-<br />
            quality construction.”
          </p>
        </Col>
      </Row>
    </div>
  );
}
