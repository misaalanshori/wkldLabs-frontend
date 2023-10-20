
export default function Document () {
    return(
        <div className="w-full relative p-48">

            <div className="flex flex-row justify-center items-center gap-4">
                <h1 className="text-4xl font-semibold">Document</h1>
                <input type="text" placeholder="Search..." className="border border-asegreydark w-11/12 rounded-xl p-1"/>
                <button className="border border-asegreydark w-36 rounded-xl ">Filter</button>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                    <h1>Title</h1>
                    <h1>Status</h1>
                    <h1>Borrower</h1>
                </div>
                <div className="flex flex-col border border-black border-solid border-x-0 border-y-2 border-b-0">
                </div>
            </div>
            
        </div>
    )
}