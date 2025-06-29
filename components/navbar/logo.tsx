import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
        <Image src="/img/jodex-logo-main.svg" alt="" width={80} height={80} className="shrink-0" />
    </Link>
    

  )
}

export default Logo
