import { Row, Col, Card } from "antd";
import exp1 from "../../assets/experience/1.png";
import exp2 from "../../assets/experience/1.png";
import exp3 from "../../assets/experience/1.png";

const experienceData = [
  { img: exp1, title: "30+", subtitle: "Years of Experience" },
  { img: exp2, title: "30+", subtitle: "Projects completed" },
  { img: exp3, title: "30+", subtitle: "Sq. Ft. Delivered" }
];

export default function Experience() {
  return (
    <div className="container mx-auto px-4 overflow-hidden">
      {/* Centered Heading */}
      <Row justify="center">
        <h1 className="text-black text-center text-[40px] font-montserrat font-light py-14">
          Our <span className="font-semibold">Experience</span>
        </h1>
      </Row>

      {/* Experience Cards */}
      <Row gutter={[20, 20]} justify="center" className="flex flex-wrap px-28 pb-10">
        {experienceData.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card className="bg-[#FFE9AB] p-4 text-center">
                <div className="flex justify-center">
              <img src={item.img} alt={item.title} className="w-40 h-auto rounded-lg mb-4" />
              </div>
              <h2 className="text-8xl font-bold font-montserrat">{item.title}</h2>
              <h2 className="text-3xl font-medium font-montserrat">{item.subtitle}</h2>
            </Card>
          </Col>
        ))}
      </Row>
      <Row justify="center" align="middle" className="flex items-center text-center px-24 pb-12 ">
    <p className="text-xl font-montserrat leading-loose">
      With over 30 years of experience in the construction industry, we take pride in delivering high-quality, reliable, and innovative construction solutions. We have successfully completed 200+ projects, covering 5000+ square feet of built-up area. Our expertise spans residential, commercial, and industrial construction, ensuring top-tier craftsmanship and durability.
      Serving Lucknow and nearby areas, we have built a reputation for excellence, precision, and timely delivery. Our skilled team utilizes advanced techniques and premium materials to bring every project to life with quality and efficiency.
      At our core, we value integrity, transparency, and customer satisfaction. Every structure we build is designed to stand the test of time, blending functionality with aesthetics. If you’re seeking a trusted construction partner in Lucknow, we’re here to deliver excellence at every step.
    </p>
</Row>

    </div>
  );
}
