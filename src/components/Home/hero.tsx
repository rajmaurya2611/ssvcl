import {Row,Col} from 'antd';
import HeroImg from "../../assets/hero/Mask group 1.png"
export default function Hero() {
  return (
    <>
        <div
        className="h-screen flex items-center p-0 m-0 bg-cover bg-no-repeat"
        style={{backgroundImage: `url(${HeroImg})`}}>
          <Row
        style={{ width: '100%', margin: 0, padding: '0 20px' }}
        justify="start"
        align="middle"
      >
        <Col xs={24} md={12}>
          <h1 className='text-white pl-1 text-5xl font-montserrat font-semibold '>
            Shri Siddhi Vinayak
          </h1>
          <h1 className='text-white text-7xl font-montserrat font-semibold '>
            Constructions
          </h1>

          <h2 className='text-white pl-1 pt-6 text-3xl font-montserrat font-medium '>
            Lucknow, Uttar Pradesh
          </h2>
          <p className='text-white pl-1 pt-6 text-md font-montserrat font-italic '>
          “We specialize in houses, commercial complexes, warehouses, and all types of civil work. Delivering top-quality construction.”
          </p>
        </Col>
      </Row>
        </div>
    </>
  )
}