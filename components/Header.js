import styles from "./Header.module.css"

export default function Header() {
    return (
        <div className={styles.header}>
            <h1>World Tech Travel</h1>
            <p>Welcome to World Tech Travel, your go-to destination for the latest news and insights on the intersection of technology, international relations, and travel. We prioritize content on international relations and technology, but also provide valuable travel-related information to enhance your journeys.</p>
        </div>
    )
}