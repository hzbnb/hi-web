import { headers } from "next/headers";
import { redirect, permanentRedirect } from "next/navigation";

export default async function Home() {
    const h = await headers(); // ✅
    const userAgent = h.get("user-agent")?.toLocaleLowerCase() || ""; // ✅ 获取请求头中的 user-agent
    const userHost = h.get("host") || ""; // ✅ 获取请求头中的 host
    const isTX = /micromessenger/.test(userAgent); // ✅ 判断是否为腾讯
    if (userHost.includes("h2b.cn") && !isTX) {
        permanentRedirect("https://hzb.gg/test");
    } else if (isTX) {
        redirect("https://h2b.cn/test");
    }

    return (
        <div className=" bg-center bg-no-repeat bg-fixed bg-cover">
            <div className="bg-black/20 font-sans grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <main className="flex flex-col gap-[32px] row-start-2 items-center   lg:w-1/2 justify-items-center ">
                    test 页面
                    <div>userAgent：{userAgent}</div>
                    <div>userHost：{userHost}</div>
                </main>
            </div>
        </div>
    );
}
