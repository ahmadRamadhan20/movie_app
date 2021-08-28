import styles from './Poster.module.scss'

export default function Poster(props) {
  if (props.isActivePoster) {
    return (
      <div className={styles.Wrapper}>
        <div className={styles.Content}>
          <div className={styles.Left}>
            <div className={styles.Image}>
              <img src={props.detailData.Poster} alt={`Poster ${props.detailData.Title}`} />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}