
export default function Document () {
    return(
        <div className="w-full relative p-20 mb-36">
            
            {/*Div for Search and filter*/}
            <div className="flex flex-row justify-center items-center gap-4 align-middle pb-5">
                <h1 className="text-4xl font-semibold">Document</h1>
                <input type="text" placeholder="Search..." className="border border-asegreydark w-11/12 rounded-xl p-1 pl-2"/>
                <button className="border border-asegreydark w-36 rounded-xl p-1">Filter</button>
            </div>
                                        {/*Div for new "Table"*/}

            {/*Div for Header"*/}
            <div className="mb-5">
                <div className="grid grid-cols-6 gap-2 text-lg font-medium">
                        <h1 className="col-span-2">Title</h1>
                        <h1 className="text-center">Status</h1>
                        <h1 className="col-span-2 text-center">Borrower</h1>
                        <h1 className="text-center">Others</h1>
                </div>
                <div className="flex flex-col border border-asegrey border-solid border-x-0 border-y-2 border-b-0"></div>
            </div>
            
            
            {/*Div for Body"*/}
            <div className="gap-y-5">
                <div id="1" className="grid grid-rows-1 grid-cols-6 grid-flow-row items-center justify-center my-3 bg-gray-100">
                            {/*Div for Title"*/}
                    <div className="leading-tight col-span-2 p-2">
                        <h1 className="font-medium">Sustainable Minds</h1>
                        <h2 className="font-light">Eli Blevis</h2>
                    </div>
                            {/*Div for Status"*/}
                    <div className="">
                        <div className="bg-yellow-200 text-center"><p>Borrowed</p></div>
                    </div>
                            {/*Div for Borrower"*/}
                    <h1 className="col-span-2 text-center">Adam</h1>
                            {/*Div for Buttons"*/}
                    <div className="flex flex-row gap-2 items-center">
                        <button className="ASE-button p-2">Borrow</button>
                        <button className="flex p-2 hover:bg-gray-200 rounded-xl">Delete</button>
                        <button className="w-10 hover:bg-gray-200 rounded-xl">:</button>
                    </div>
                </div>

                <div id="2" className="grid grid-rows-1 grid-cols-6 grid-flow-row items-center justify-center my-3 bg-gray-100">
                            {/*Div for Title"*/}
                    <div className="leading-tight col-span-2 p-2">
                        <h1 className="font-medium">Pemanfaatan Teknologi Game Untuk Pembelajaran</h1>
                        <h2 className="font-light">AZ Falani, PL Ekawati</h2>
                    </div>
                            {/*Div for Status"*/}
                    <div className="">
                        <div className="bg-green-300 text-center"><p>Available</p></div>
                    </div>
                            {/*Div for Borrower"*/}
                    <h1 className="col-span-2 text-center">-</h1>
                            {/*Div for Buttons"*/}
                    <div className="flex flex-row gap-2 items-center">
                        <button className="ASE-button p-2 ">Borrow</button>
                        <button className="flex p-2 hover:bg-gray-200 rounded-xl">Delete</button>
                        <button className="w-10 hover:bg-gray-200 rounded-xl">:</button>
                    </div>
                </div>
            </div>

            {/*Div for Button*/}
            <div className="pt-5">
                <button type="button" className="p-2 bg-white border rounded-full border-black text-black hover:bg-gray-200">New Document</button>
            </div>    
        </div>
    )
}

