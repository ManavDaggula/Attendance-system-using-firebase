import React, { useEffect, useRef } from 'react'
import styles from "./Menu.module.css"
import { useNavigate } from 'react-router-dom'


function Menu(props) {
    const menu = useRef(null)
    const navigate = useNavigate();

    function toggleMenu(){
        // const menu = e.target.parentElement
        // console.log(menu.current);
        // window.alert("menu pressed")
        // menu.parentElement.querySelector()
        (menu.current.dataset.state == "closed")?
        (menu.current.dataset.state = "open"):
        (menu.current.dataset.state = "closed")
    }

    function openMenu(){
      menu.current.dataset.state = "open"
    }

    function closeMenu(){
      // console.log("menu to be closed")
      menu.current.dataset.state = "closed"
    }

    useEffect(()=>{
      console.log(menu.current)
      menu.current.querySelector('svg').addEventListener("blur",closeMenu)
    },[])

  return (
    
    <section className={styles.menu} data-state="closed"  ref={menu} >
        <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"
        /></svg>
        <div className={styles.menuBackground}>
          <button onClick={()=>{navigate("/");closeMenu();}}>Home</button>
            {(props.status=='attendee')?
            <button onClick={()=>{props.changeStatus('admin');closeMenu();navigate("/")}}>admin</button>
            :
            <button onClick={()=>{props.changeStatus('attendee');closeMenu();navigate("/")}}>logout</button>
            }
        </div>
    </section>
  )
}

export default Menu