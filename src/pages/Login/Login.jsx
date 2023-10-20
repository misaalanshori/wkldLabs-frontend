import logo from '/src/assets/LogoASE-Text.png'

export default function Login(){
    return (
        <div class="flex flex-col justify-center items-center">
            <img src={logo} alt="LogoASE" className="w-96" />
            <div class="login">
                <form className="flex flex-col gap-5" onSubmit={(e)=>e.preventDefault()}>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <input type="submit" className="ASE-button bg-aseorange"/>
                </form>
            </div>
        </div>
    );
}