import Heading from "@/components/Heading";

const Text = () => {
    return <>
        <Heading title="Text" />
        <div className="relative h-[90%]">
            <div className="output">
                <h2 className="text-white">Out put area</h2>
            </div>
            <div className="input absolute bottom-0 w-full border border-[#fff]">
                input
            </div>
        </div>
    </>;
}

export default Text