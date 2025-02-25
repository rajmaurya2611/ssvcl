import HeroImg from "../../assets/hero/Mask group 1.png"
export default function Hero() {
  return (
    <>
        <div
        className="h-screen flex items-center p-0 m-0 bg-cover bg-no-repeat"
        style={{backgroundImage: `url(${HeroImg})`}}>

        </div>
    </>
  )
}