import logoase from '../assets/LogoASE.png';
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaGooglePlusG,FaInstagram,FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer class="flex flex-col sm:flex-row gap-8 text-white font-extralight relative bottom-0 w-full p-12 bg-[#1B1D26]">
            <img class="w-24 object-scale-down self-center" src={logoase}/>
            <div class="flex-1">
                <h4 class="font-medium">Address</h4>
                <p class="w-2/3">Gedung TULT Lantai 6, Jl. Telekomunikasi Terusan Buah Batu, Bandung - 40257, Indonesia</p>
            </div>
            <div class="flex-1">
                <h4 class="font-medium">Follow Us</h4>
                <div class="flex flex-row gap-2">
                    <a class="flex items-center p-2 w-8 aspect-square rounded-full bg-[#3b5998]">
                        <FaFacebookF />
                    </a>
                    <a class="flex items-center p-2 w-8 aspect-square rounded-full bg-[#55acee]">
                        <FaTwitter />
                    </a>
                    <a class="flex items-center p-2 w-8 aspect-square rounded-full bg-[#0976b4]">
                        <FaLinkedinIn />
                    </a>
                    <a class="flex items-center p-2 w-8 aspect-square rounded-full bg-[#c23321]">
                        <FaGooglePlusG />
                    </a>
                    <a href='https://www.instagram.com/rplgdc_' target='_blank' class="flex items-center p-2 w-8 aspect-square rounded-full bg-[#3f729b]">
                        <FaInstagram />
                    </a>
                    <a class="flex items-center p-2 w-8 aspect-square rounded-full bg-[#b31217]">
                        <FaYoutube />
                    </a>
                    
                </div>
            </div>
        </footer>
    )
}