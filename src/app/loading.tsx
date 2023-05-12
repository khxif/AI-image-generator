import Image from "next/image";
import Rolling from '../../public/Rolling.svg'

export default function loading() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
        <Image
        src={Rolling}
        alt="loading..."
        />
    </div>
  )
}
