import { motion } from 'framer-motion'
import Image from 'next/image'
import mainimg from '../../public/images/Branco_Completo.png'

const HeroSection = () => {
    return (
        <section className="h-screen w-full bg-primary/25 flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center max-w-7xl"
            >
                <Image src={mainimg} alt="Minha Imagem" width={1000} height={500}/>
            </motion.div>
        </section>
    )
}

export default HeroSection