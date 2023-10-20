
export default function Document () {
    return(
        <div className="w-full relative p-20">
            
            {/*Div for Search and filter*/}
            <div className="flex flex-row justify-center items-center gap-4 align-middle pb-5">
                <h1 className="text-4xl font-semibold">Document</h1>
                <input type="text" placeholder="Search..." className="border border-asegreydark w-11/12 rounded-xl p-1 pl-2"/>
                <button className="border border-asegreydark w-36 rounded-xl p-1">Filter</button>
            </div>

            {/*Div for Title, Status, and Borrower*/}
            <div className="flex flex-col">
                <div className="flex flex-row gap-6 text-xl w-full">
                    <h1 className="w-2/6">Title</h1>
                    <h1 className="mr-10">Status</h1>
                    <h1 className="mx-5 pl-48">Borrower</h1>
                </div>
                <div className="flex flex-col border border-asegrey border-solid border-x-0 border-y-2 border-b-0">
                </div>
            </div>

            {/*Div for Document and it's content*/}
            <div className="flex flex-row my-3 p-2 bg-gray-100 gap-3 items-center">
                <div className="leading-tight w-2/6">
                    <h1 className="font-medium">Sustainable Minds</h1>
                    <h2 className="font-light">Eli Blevis</h2>
                </div>

                <div className="mr-20">
                    <div className="bg-green-300 p-1">
                        <p>Available</p>
                    </div>
                </div>

                <div className="m-auto pl-32">
                    <h1>Adam</h1>
                </div>

                <div className="flex flex-row gap-7 m-auto">
                    <button className="ASE-button">Borrow</button>
                    <button className="flex p-2 hover:bg-gray-200 rounded-xl">Delete</button>
                    <button className="w-8 hover:bg-gray-200 rounded-xl">:</button>
                </div>

            </div>
            <div className="pt-5">
                <button className="p-2 bg-white border rounded-full border-black text-black">New Document</button>
            </div>
        </div>
    )
}

