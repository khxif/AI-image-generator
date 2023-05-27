import Image from "next/image";
import Rolling from '../../public/Rolling.svg'

export default function loading() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
        <Image
        src={Rolling}
        alt="loading..."
        width={20}
        height={20}
        />
    </div>
  )
}
