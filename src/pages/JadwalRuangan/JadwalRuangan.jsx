import { useState, useEffect } from "react";
import ScheduleCalendar from "./components/ScheduleCalendar";
import { MdOutlineDelete, MdMoreVert } from "react-icons/md";
import { PopUpDialog, PopUpActions, PopUpContents, PopUpHeader } from "../../components/PopUpDialog";

function NewActivityDialog({showDialog, setShowDialog}) {
    const [date, setDate] = useState(new Date());
    return (
        <PopUpDialog open={showDialog} onChange={setShowDialog}>
            <PopUpHeader text="New Activity"/>
            <PopUpContents>
                <div className="flex flex-row items-center">
                    <form className="flex flex-col gap-2">
                        <table className="border-separate border-spacing-x-2 border-spacing-y-2">
                            <tbody>
                                <tr>
                                    <td className="w-32">Meeting Name</td>
                                    <td><input className="aseinput" type="text" /></td>
                                </tr>
                                <tr>
                                    <td className="w-32">Start Time</td>
                                    <td><input className="aseinput" type="date" /></td>
                                </tr>
                                <tr>
                                    <td className="w-32"></td>
                                    <td><input className="aseinput" type="time" /></td>
                                </tr>
                                <tr>
                                    <td className="w-32">End Time</td>
                                    <td><input className="aseinput" type="date" /></td>
                                </tr>
                                <tr>
                                    <td className="w-32"></td>
                                    <td><input className="aseinput" type="time" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <div>
                        <ScheduleCalendar currentDate={date} onDateUpdate={setDate} />
                    </div>
                </div>
                
            </PopUpContents>
            <PopUpActions>
                <button className="py-1 px-4 rounded-full bg-aseorange text-white" onClick={() => {alert("Pura Puranya di save");setShowDialog(false)}}>Save</button>
                <button className="py-1 px-4 rounded-full bg-aseorange text-white" onClick={()=>setShowDialog(false)}>Close</button>
            </PopUpActions>
        </PopUpDialog>
    )
}

export default function JadwalRuangan() {
    const [date, setDate] = useState(new Date());
    const [scheduleData, setScheduleData] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    useEffect(() => {
        setScheduleData([
            {
                name: "Nama Kegiatan",
                start: new Date("11 June 2023, 15:00"),
                end: new Date("12 June 2023, 12:00")
            },
            {
                name: "Nama Kegiatan",
                start: new Date("23 June 2023, 12:00"),
                end: new Date("24 June 2023, 12:00")
            },
            {
                name: "Nama Kegiatan 1 2 3 4 5",
                start: new Date("23 June 2023, 12:00"),
                end: new Date("24 June 2023, 12:00")
            },
            {
                name: "Nama Kegiatan",
                start: new Date("23 June 2023, 12:00"),
                end: new Date("24 June 2023, 12:00")
            },
            
        ])
    }, [])
    const formatDate = (date) => {
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };
        return date.toLocaleDateString('id-ID', options);
    }
    console.log(date)
    return (
      <div className="p-16 flex flex-col gap-4">
        <h1 className="text-3xl font-semibold ">Schedule</h1>
        <div className="flex flex-row">
          <table className="flex-1 h-fit border-separate border-spacing-x-0 border-spacing-y-2">
            <thead className="">
                <tr className="text-lg text-left h-4">
                    <th className="border-b border-black pl-8 font-normal">Name</th>
                    <th className="border-b border-black px-2 font-normal">Start</th>
                    <th className="border-b border-black px-2 font-normal">End</th>
                    <th className="border-b border-black px-2 font-normal"></th>
                </tr>
            </thead>
            <tbody>
                {scheduleData.map((data) => (
                <tr className=" bg-asegrey rounded-lg bg-opacity-5">
                    <td className="rounded-l-lg py-4 px-2 pl-8">{data.name}</td>
                    <td className="py-4 px-2">{formatDate(data.start)}</td>
                    <td className="py-4 px-2">{formatDate(data.end)}</td>
                    <td className="rounded-r-lg py-4">
                    <span className="ml-auto mr-8 w-fit flex flex-row gap-2">
                        <MdOutlineDelete size={24} />
                        <MdMoreVert size={24} />
                    </span>
                    </td>
                </tr>
                ))}
            </tbody>
            
          </table>
          <ScheduleCalendar currentDate={date} onDateUpdate={setDate} />
        </div>
        <button onClick={()=>setShowDialog(true)} className="self-end rounded-xl w-48 h-8 bg-white text-black border border-asegrey">New Schedule</button>
        <NewActivityDialog showDialog={showDialog} setShowDialog={setShowDialog}/>
      </div>
    );
}