export function PopUpHeader({text}) {
    return (
        <div className="w-full h-fit bg-aseorange text-white p-4 text-2xl">
            <h1>{text}</h1>
        </div>
    )
}

export function PopUpContents({children}) {
    return (
        <div className="w-full p-4">
            {children}
        </div>
    )
}

export function PopUpActions({children}) {
    return (
        <div className="w-full p-4 flex flex-row justify-end gap-2 flex-wrap">
            {children}
        </div>
    )
}

export function PopUpDialog({open, onChange, children}) {
  return (
    <div className={`fixed top-0 left-0 p-4 w-screen h-screen flex justify-center items-center z-10 ${open ? "" : "hidden"}`}>
        <div className="min-w-[50%] max-h-full bg-white z-20 overflow-y-auto">
            {children}
        </div>
        <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50" onClick={() => onChange(false)}></div>
    </div>
  );
}