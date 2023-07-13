import Image from "next/image";
import Logo from "@/assets/Qatoto.svg";
import menuIcon from "@/assets/menu.svg";
import searchIcon from "@/assets/search.svg";
import micIcon from "@/assets/mic.svg";
import notificationIcon from "@/assets/notifications.svg";
import translateIcon from "@/assets/translate.svg";
import accountIcon from "@/assets/account_circle.svg";
const Navbar = () => {
    /* state to be replaced later */
    let user = null;
    return (
        <div className="flex h-[56px]">
            <div className="flex flex-[0_0_max-content] ">
                <Image
                    className="mx-[28px] cursor-pointer"
                    height={24}
                    width={24}
                    src={menuIcon}
                    alt="menu"
                />
                <Image
                    className="cursor-pointer"
                    height={37}
                    width={107}
                    src={Logo}
                    alt="logo"
                />
            </div>
            <div className="flex items-center justify-center flex-auto ">
                <form className="flex w-[462px] border-2 rounded-full border-[#CCE8E9] h-[40px]">
                    <input
                        className="rounded-full px-[20px] flex-auto focus:outline-0"
                        type="text"
                    />
                    <Image
                        className="flex items-center cursor-pointer rounded-r-full bg-[#CCE8E9] align-middle flex-0 flex-[0_0_40px] p-[8px]"
                        height={24}
                        width={24}
                        src={searchIcon}
                        alt="search"
                    />
                </form>
                <Image
                    className="border-[#CCE8E9] cursor-pointer border-2 rounded-full h-[40px] w-[40px] flex items-center justify-center p-[8px] ml-4"
                    height={24}
                    width={24}
                    src={micIcon}
                    alt="mic"
                />
            </div>
            <div className="flex flex-[0_0_max-content] items-center">
                <Image
                    className="border-[#CCE8E9] cursor-pointer border-2 rounded-full h-[40px] w-[40px] flex items-center justify-center p-[8px] ml-4"
                    height={24}
                    width={24}
                    src={notificationIcon}
                    alt="mic"
                />
                <Image
                    className="border-[#CCE8E9] cursor-pointer border-2 rounded-full h-[40px] w-[40px] flex items-center justify-center p-[8px] ml-4"
                    height={24}
                    width={24}
                    src={translateIcon}
                    alt="mic"
                />
                <button className="flex cursor-pointer gap-[8px] items-center border-2 border-[#CCE8E9] border-2 rounded-full h-[40px] px-[10px] ml-[10px] mr-[10px] g-[5px]">
                    <Image
                        className="h-[40px] w-[auto] flex items-center justify-center py-[8px]"
                        height={24}
                        width={24}
                        src={!user ? accountIcon : ""}
                        alt="mic"
                    />
                    {!user ? <p>Sign in</p> : <p>Hi, {user}</p>}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
