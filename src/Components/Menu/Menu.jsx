import React, { useRef } from 'react'
import styles from "./Menu.module.css"

function Menu(props) {
    const menu = useRef(null)

    function toggleMenu(e){
        // const menu = e.target.parentElement
        // console.log(menu.current);
        // window.alert("menu pressed")
        // menu.parentElement.querySelector()
        (menu.current.dataset.state == "closed")?
        (menu.current.dataset.state = "open"):
        (menu.current.dataset.state = "closed")
    }

  return (
    
    <section className={styles.menu} data-state="closed"  ref={menu}>
        <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"
        /></svg>
        <div className={styles.menuBackground}>
            {(props.isLoggedIn==false)?
            <button>login</button>
            :
            <button>logout</button>
            }
        </div>
    </section>
  )
}

export default Menu