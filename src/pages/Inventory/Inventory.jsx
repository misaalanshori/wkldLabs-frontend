import {popUpDialog} from "../../components/PopUpDialog.jsx"
import {MdDeleteForever, MdMoreVert} from "react-icons/md"
import {useState, useEffect} from "react";


export default function Inventory(){
    const [selectedData, setSelectedData] = useState(null);
    const sampleData = [
        {
            id: "E01",
            nama: "PC",
            unit: "4 Unit",
            date: "23 January 2023",
            deskripsi: "Ini PC bang hehe",
            gambar: "https://source.unsplash.com/640x360?funny-animals"
        },
        {
            id: "E02",
            nama: "PS5",
            unit: "1 Unit",
            date: "23 January 2023",
            deskripsi: "Ini PS bang hehe",
            gambar: "https://source.unsplash.com/640x360?funny-animals"
        },
        {
            id: "E03",
            nama: "Microwave",
            unit: "1 Unit",
            date: "23 January 2023",
            deskripsi: "Ini buat masak bang hehe",
            gambar: "https://source.unsplash.com/640x360?funny-animals"
        }
    ]
    useEffect(() => {
        setSelectedData(sampleData[0])
    }, []);
    return (
        <div className="flex flex-col p-20 gap-4">
            <h1 className="text-5xl">Inventaris</h1>
            <div className="flex flex-row gap-4">
                <div className="flex-1">
                    <table className="w-full flex-1 h-fit border-separate border-spacing-x-0 border-spacing-y-4">
                        <thead>
                            <tr className="text-lg text-left h-4">
                                <th className="border-b border-black pl-8 font-normal">ID</th>
                                <th className="border-b border-black px-2 font-normal">Name</th>
                                <th className="border-b border-black px-2 font-normal">Unit</th>
                                <th className="border-b border-black px-2 font-normal">Date</th>
                                <th className="border-b border-black px-2 font-normal"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {sampleData.map((e,i)=>(
                            <tr className=" bg-asegrey rounded-lg bg-opacity-10 hover:bg-opacity-20" onClick={()=>setSelectedData(sampleData[i])}>
                                <td className="py-4 px-2 pl-8">{e.id}</td>
                                <td className="py-4 px-2">{e.nama}</td>
                                <td className="py-4 px-2">{e.unit}</td>
                                <td className="py-4 px-2">{e.date}</td>
                                <td className="py-4">
                                    <span className="flex flex-row">
                                        <button onClick={(e)=>{alert("123");e.stopPropagation()}}><MdDeleteForever size="24px"/></button>
                                        <button onClick={(e)=>{alert("123");e.stopPropagation()}}><MdMoreVert size="24px"/></button>
                                    </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col justify-center items-center bg-asegrey bg-opacity-10 p-4 gap-2">
                    <img src={selectedData?.gambar} alt="" className="w-56 object-cover rounded-xl"/>
                    <form action="">
                        <table>
                            <tr>
                                <td>ID</td>
                                <td>
                                    <input type="text" className="aseinput w-48" value={selectedData?.id} disabled/>
                                </td>
                            </tr>
                            <tr>
                                <td>Nama</td>
                                <td>
                                    <input type="text" className="aseinput w-48" value={selectedData?.nama}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Deskripsi</td>
                                <td>
                                    <textarea name="" id="" className="aseinput w-48" value={selectedData?.deskripsi}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>Unit</td>
                                <td>
                                    <input type="text" className="aseinput w-48" value={selectedData?.unit}/>
                                </td>
                            </tr>
                        </table>
                        <input type="submit" value="Update" className="ASE-button bg-aseorange"/>
                    </form>
                </div>
            </div>
            <button className="self-end rounded-xl w-48 h-8 bg-white text-black border border-asegrey">New Item</button>
        </div>
    )
}