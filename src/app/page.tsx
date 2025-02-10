import Link from "next/link";
import HomeMsgPreview from "./components/HomeMsgPreview";

export default function Home() {
    return (
        <main className="flex flex-col ">
            <span className="border-2 border-red-600 px-8">
                <HomeMsgPreview />
            </span>

            <Link
                href="/MsgPage"
                className="border-2 border-black font-semibold w-fit bg-gray-300 rounded-md py-4 px-2 my-7"
            >
                New Message
            </Link>
        </main>
    );
}
