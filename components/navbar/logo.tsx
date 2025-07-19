import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
        <Image src="/img/Jodex-logo-horizonal.svg" alt="" width={150} height={150} className="shrink-0" />
    </Link>
    

  )
}

export default Logo
