import { Table, TableHeader, TableBody, TableRow, TableCol } from '../../components/Table';
import { MdOutlineDelete, MdMoreVert } from "react-icons/md";

export default function Jadwal() {
    return(
        <div className='px-10 pb-44 w-full flex flex-col'>
            <h1 className='text-3xl font-semibold pt-16 pb-2'>Jadwal</h1>
            <div className='' >
                <Table>
                    <TableHeader>
                        <TableCol>Activity</TableCol>
                        <TableCol>Participant</TableCol>
                        <TableCol>Time</TableCol>
                        <TableCol><div className='text-center m-auto'>Status</div></TableCol>
                        <TableCol></TableCol>
                    </TableHeader>

                    <TableBody>

                        <h1 className='font-extrabold text-lg text-aseorange'>Monday, 5 July 2023</h1>
                        
                        <TableRow>
                            <TableCol>Responsi</TableCol>
                            <TableCol><div className='w-96 break-words'>Habli Zulfana, Maximus Bayu</div></TableCol>
                            <TableCol>11 : 00</TableCol>
                            <TableCol> 
                            <div className='w-full'>
                                <div className="bg-green-300 text-center p-1 w-36 m-auto"><p>Ongoing</p></div>
                            </div>
                            </TableCol>
                            <TableCol>
                                <div className='flex flex-row items-center'>
                                <MdOutlineDelete size={24} />
                                <MdMoreVert size={24} />
                                </div>
                            </TableCol>
                        </TableRow>
                        
                        <TableRow>
                            <TableCol>Asistensi</TableCol>
                            <TableCol>
                                <div className='w-96 break-words'>Habli Zulfana, Maximus Bayu</div>
                            </TableCol>
                            <TableCol>15 : 00</TableCol>
                            <TableCol> 
                            <div className='w-full'>
                                <div className="bg-gray-300 text-center p-1 w-36 m-auto"><p>Not Started</p></div>
                            </div>
                            </TableCol>
                            <TableCol>
                                <div className='flex flex-row items-center'>
                                <MdOutlineDelete size={24} />
                                <MdMoreVert size={24} />
                                </div>
                            </TableCol>
                        </TableRow>

                        <h1 className='font-extrabold text-lg text-aseorange'>Friday, 13 July 2023</h1>

                        <TableRow>
                            <TableCol>Asistensi</TableCol>
                            <TableCol>
                                <div className='w-96 break-words'>Rusdi, Faiz</div>
                            </TableCol>
                            <TableCol>15 : 00</TableCol>
                            <TableCol> 
                            <div className='w-full'>
                                <div className="bg-gray-300 text-center p-1 w-36 m-auto"><p>Not Started</p></div>
                            </div>
                            </TableCol>
                            <TableCol>
                                <div className='flex flex-row'>
                                <MdOutlineDelete size={24} />
                                <MdMoreVert size={24} />
                                </div>
                            </TableCol>
                        </TableRow>

                    </TableBody>
                </Table>
            </div>
            <button className='rigt-0 self-end rounded-xl w-48 h-8 bg-white text-black border border-asegrey my-5 hover:bg-gray-200'>New Event</button>
        </div>
    )
}