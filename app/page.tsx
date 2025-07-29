import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-[url('/bg/background1.webp')] bg-center bg-no-repeat bg-fixed bg-cover">
            <div className="bg-black/20 font-sans grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <main className="flex flex-col gap-[32px] row-start-2 items-center   lg:w-1/2 justify-items-center ">
                    {/* <!--Logo--> */}
                    <div className="">
                        <span className="font-pacifico text-6xl">H Z B</span>
                    </div>

                    {/* <!--介绍信息--> */}
                    <div className="message cards lg:w-1/2 font-bold text-xs">
                        <div className="des" id="des">
                            <span className="icon-[fa-solid--quote-left] font-pacifico"></span>
                            <div className="des-title text-xl">
                                <span className="font-pacifico">I love you more than anything !</span>
                                <br />
                                <span>我爱你，胜过一切。</span>
                            </div>
                            <span className="icon-[fa-solid--quote-right] font-pacifico mt-auto"></span>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
