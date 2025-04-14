import { FaWhatsapp, FaInstagram, FaFacebook  } from "react-icons/fa";

export default function SocialIcons() {
    return (
        <div className='flex gap-5 mt-8 pb-[2rem]'>
          <a href='#' target='_blank'><FaWhatsapp className='texthover w-8 h-8'/></a>
          <a href='#' target='_blank'><FaInstagram className='texthover w-8 h-8'/></a>
          <a href='#' target='_blank'><FaFacebook className='texthover w-8 h-8'/></a>
        </div>
    )
}