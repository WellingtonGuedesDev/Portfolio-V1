
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function SubFooter() {
    useEffect(() => {
        
        window.addEventListener('scroll', () => {
          const scroll = window.scrollY;
          const footer = document.querySelector("#navFooter")
          console.log(scroll)
    
        //   if (scroll > 2624.800048828125) {
        //     footer.style.transform = 'translateY(0)';
        //     footer.style.zIndex = '100';
        //   } else {
        //     footer.style.transform = 'translateY(100%)';
        //     footer.style.zIndex = '-100';
        //   }
        });
    
        console.log(scroll)
      })
    return (
        <nav id="navFooter" className="border-b border-[#cbcbcb52] pb-8">
            <div class="flex flex-col items-start gap-4 border-bottom">
                <Link className="w-auto" to={"/"}><span class=" texthover font-medium text-[clamp(1rem,4vw,3rem)]">Ínicio</span></Link>
                <Link className="w-auto" to={"/products"}><span class=" texthover font-medium text-[clamp(1rem,4vw,3rem)]">Produtos</span></Link>
                <Link className="w-auto" to={"/about"}><span class=" texthover font-medium text-[clamp(1rem,4vw,3rem)]">Sobre nós</span></Link>
                <Link className="w-auto" to={"/contact"}><span class=" texthover font-medium text-[clamp(1rem,4vw,3rem)]">Contato</span></Link>
            </div>
        </nav>
    );
}