
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
                    <a href="/">Home</a>
                        <a href="/category/world">World</a>
                        <a href="/category/tech">Tech</a>
                        <a href="/category/travel">Travel</a>
                    </div>
                </div>

            </div>

            <div className={styles.avatar} >
                <img className={styles.avatar} src="" alt="avatar" />
            </div>
        </header>


    )




}