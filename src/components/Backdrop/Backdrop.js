import styles from './Backdrop.module.css'

export default function Backdrop(props) {
  if (props.isActiveBackdrop) {
    return (
      <div
        className={styles.Wrapper}
        onClick={() => props.clickedBackdrop()}>test</div>
    )
  } else {
    return null
  }
  
}