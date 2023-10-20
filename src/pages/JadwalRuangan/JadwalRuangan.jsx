import { useState, useEffect } from "react";
import ScheduleCalendar from "./components/ScheduleCalendar";
import { MdOutlineDelete, MdMoreVert } from "react-icons/md";

export default function JadwalRuangan() {
    const [date, setDate] = useState(new Date());
    const [scheduleData, setScheduleData] = useState([]);
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
          <table className="flex-1 h-fit border-separate border-spacing-x-0 border-spacing-y-4">
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
                <tr className=" bg-asegrey rounded-lg bg-opacity-10">
                    <td className="py-4 px-2 pl-8">{data.name}</td>
                    <td className="py-4 px-2">{formatDate(data.start)}</td>
                    <td className="py-4 px-2">{formatDate(data.end)}</td>
                    <td className="py-4">
                    <span className=" ml-auto mr-8 w-fit flex flex-row gap-2">
                        <MdOutlineDelete size={24} />
                        <MdMoreVert size={24} />
                    </span>{" "}
                    </td>
                </tr>
                ))}
            </tbody>
            
          </table>
          <ScheduleCalendar currentDate={date} onDateUpdate={setDate} />
        </div>
        <button className="self-end rounded-xl w-48 h-8 bg-white text-black border border-asegrey">New Schedule</button>
      </div>
    );
}