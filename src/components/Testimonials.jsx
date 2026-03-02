import Marquee from "react-fast-marquee"
import { Player } from "video-react"



function Testimonialsjsx() {
  return (
    <div>
      
      <Marquee>  
        <img src="https://img.freepik.com/premium-vector/cricket-player-logo-design-vector-illustration_898026-1089.jpg?w=2000" width={200} ></img>
        <img src="https://www.bing.com/th/id/OIP.bTpgBsi53QJBtdMbqcNFHQHaHa?w=198&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" width={200}></img>
        <img src="https://www.bing.com/th/id/OIP.4bFi_ArncSZ6Mw7FHEZd1gHaHa?w=199&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" width={200}></img>
        <img src="https://img.freepik.com/premium-vector/cricket-player-logo-design-vector-illustration_898026-1089.jpg?w=2000" width={200}></img>
      </Marquee>

<Player playsInline   className='mt-16' src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
     

    </div>
  )
}

export default Testimonialsjsx
