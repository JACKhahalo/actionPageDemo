import BannerIamge from "../../assets/banner.jpg"
import Title1Image from '../../assets/title1.jpg'
import Title2Image from '../../assets/title2.jpg'
import CommentImage from '../../assets/comment.jpg'
import styles from './styles.module.scss'

const FirstSection = ()=>{

    return (
        <div className={styles.firstSection}>
            <img src={BannerIamge} alt="Banner"/>
        </div>
    )
}

export default FirstSection