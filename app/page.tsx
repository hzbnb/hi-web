import { headers } from "next/headers";
import { redirect, permanentRedirect } from "next/navigation";

export default async function Home() {
    const h = await headers(); // ✅
    const userAgent = h.get("user-agent") || ""; // ✅ 获取请求头中的 user-agent
    const userHost = h.get("host") || ""; // ✅ 获取请求头中的 host
    const isTX = /micromessenger/.test(userAgent); // ✅ 判断是否为腾讯
    if (userHost.includes("h2b.cn") && !isTX) {
        permanentRedirect("https://hzb.gg");
    } else if (isTX) {
        redirect("https://h2b.cn");
    }

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
                                {/* <span>我爱你，胜过一切。</span> */}
                                <span>愿得一心人，白首不分离。</span>
                            </div>
                            <span className="icon-[fa-solid--quote-right] font-pacifico mt-auto"></span>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
