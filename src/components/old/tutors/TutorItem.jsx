import React from 'react'
import styles from "./TutorList.module.css"

const TutorItem = ({lastName, email}) => {
  return (
    <li className={styles.item}>
      <p>{lastName}</p>
      <hr />
      <p>{email}</p>
    </li>
  )
}

export default TutorItem