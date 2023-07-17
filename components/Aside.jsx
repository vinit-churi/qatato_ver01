"use client";
import Link from "next/link";
import Image from "next/image";
import videoIcon from "@/assets/video_call.svg";
import homeIcon from "@/assets/home.svg";
import animeIcon from "@/assets/videocam.svg";
import storeIcon from "@/assets/store.svg";
import aiIcon from "@/assets/screen_share.svg";
import { useSelectedLayoutSegment } from "next/navigation";
const Aside = () => {
    const segment = useSelectedLayoutSegment();
    console.log(segment, "look here");
    return (
        <div className="col-span-1 gap-[10px] flex flex-col items-center pt-[44px]">
            <Link
                href="/create"
                as={"create"}
                className=" flex flex-col gap-[4px] mb-[30px] justify-center"
            >
                <Image
                    className=" bg-[#D6E3FF] rounded-2xl flex-col justify-center items-center inline-flex p-[16px] h-[56px] w-[56px]"
                    src={videoIcon}
                    height={24}
                    width={24}
                    alt="home"
                />
                <p className="w-0 h-0 opacity-0 text-zinc-900 text-xs font-medium leading-none tracking-wide">
                    create
                </p>
            </Link>
            <Link href="/" className="flex flex-col gap-[4px] justify-center">
                <Image
                    className={`${
                        segment === null ? "bg-[#CCE8E9]" : ""
                    } rounded-2xl w-14 h-8 px-[16px] py-[4px]`}
                    src={homeIcon}
                    height={24}
                    width={24}
                    alt="home"
                    as={"home"}
                />
                <p className="text-center text-zinc-900 text-xs font-medium leading-none tracking-wide">
                    Home
                </p>
            </Link>
            <Link
                href="/anime"
                className="flex flex-col gap-[4px] justify-center"
            >
                <Image
                    className="w-14 h-8 px-[16px] py-[4px] m-0"
                    src={animeIcon}
                    height={24}
                    width={24}
                    alt="anime"
                />
                <p className="text-center text-zinc-900 text-xs font-medium leading-none tracking-wide">
                    Anime
                </p>
            </Link>
            <Link
                href="/store"
                className="flex flex-col gap-[4px] justify-center"
            >
                <Image
                    className={`${
                        segment === "store" ? "bg-[#CCE8E9]" : ""
                    } rounded-2xl w-14 h-8 px-[16px] py-[4px] m-0`}
                    src={storeIcon}
                    height={24}
                    width={24}
                    alt="store"
                />
                <p className="text-center text-zinc-900 text-xs font-medium leading-none tracking-wide">
                    Store
                </p>
            </Link>
            <Link href="/ai" className="flex flex-col gap-[4px] justify-center">
                <Image
                    className="w-14 h-8 px-[16px] py-[4px] m-0"
                    src={aiIcon}
                    height={24}
                    width={24}
                    alt="ai"
                />
                <p className="text-center text-zinc-900 text-xs font-medium leading-none tracking-wide">
                    Ai
                </p>
            </Link>
        </div>
    );
};

export default Aside;
