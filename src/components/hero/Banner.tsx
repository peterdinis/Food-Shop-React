import Slider from "react-slick";

const Banner: React.FC = () => {

  return (
    <div className="carousel relative container mx-auto" style={{
        maxWidth: "1600px"
    }}>
        <div className="mt-8 carousel-inner relative overflow-hidden w-full">
        
            <div className="carousel-item absolute opacity-0" style={{
                height: "50vh"
            }}>
                <div className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style={{
                    backgroundImage: "https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                }}>

                    <div className="container mx-auto">
                        <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                            <p className="text-black text-2xl my-4">Stripy Zig Zag Jigsaw Pillow and Duvet Set</p>
                            <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
};

export default Banner;
