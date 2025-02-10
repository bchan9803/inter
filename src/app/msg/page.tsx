import HomeMsgPreview from "../components/HomeMsgPreview";

export default function MsgPage() {
    return (
        <main className="flex flex-col">
            {/* page section */}
            <span className="border-2 border-red-600 py-2 px-8">
                <header>
                    <h2 className="font-semibold text-center p-4">
                        @larryboy24
                    </h2>
                </header>

                <HomeMsgPreview
                    profileImg="BC"
                    user="bchan98"
                    region="US"
                    message="lkkdks sdlkd dksl"
                    date="12/26/24"
                    time="2:17 PM"
                />
                <HomeMsgPreview
                    profileImg="LB"
                    user="larryboy76"
                    region="BR"
                    message="lkkdks sdlkd dksl"
                    date="12/26/24"
                    time="2:17 PM"
                />

                {/* chat box */}
                <span className="flex mt-12 gap-12">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full mx-auto"
                    />
                    <button className="font-bold btn px-8">Send</button>
                </span>
            </span>
        </main>
    );
}
