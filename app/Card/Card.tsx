import style from './card.module.css'
import Image from 'next/image'


function Card() {
    return (
      <h1>  
            <Image
                src='https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-nen-dien-thoai-dep-nhat-hien-nay-7.jpg.webp'
                width={500}
                height={0}
                alt='test'
                quality={100}

            />
      </h1>
    )
}
export default Card