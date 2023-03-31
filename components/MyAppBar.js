
import { useState } from "react"
import styles from "./MyAppBar.module.css"

export default function MyAppBar() {
   const [toggle,setToggle]=useState(null);
  const[btnClicked,setBtnClicked]=useState(false);
    console.log(btnClicked);

    function handleClick(event){

        console.log("clicked");
        if(btnClicked===false){
            setToggle("flex");
            setBtnClicked(true);
        }
      
        else{
            setToggle("none");
            setBtnClicked(false);
        }
    }

    return (

        <header className={styles.nav}>
            <div className={styles.navContent}>
                <div className={styles.logo}>
                    <p>WTT</p>
                </div>
                <div className={styles.navToggle}>
                    <button className={styles.navToggler} onClick={handleClick} >☰</button>
                    <div className={styles.navList} style={{display:toggle}}>
                        <a href="#">World</a>
                        <a href="#">Tech</a>
                        <a href="#">Travel</a>
                    </div>
                </div>

            </div>

            <div className={styles.avatar} >
                <img className={styles.avatar} src="" alt="avatar" />
            </div>
        </header>


    )




}