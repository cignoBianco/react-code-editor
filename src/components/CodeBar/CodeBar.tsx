import { useState } from 'react';
import styles from './CodeBar.module.css';

// interface CodeBarProps { }

const CodeBar = () => {
    const [activeTab, setActiveTab] = useState("");
    const TABS = ['html', 'css', 'js'];

    return (
        <div className={styles.codebar}>
            <nav className={styles.tab}>
                {TABS.map((tab) => {
                    return <button className={`${styles.item} ${activeTab === tab ? styles.activeTab : ''}`} onClick={() => { setActiveTab(tab) }}>
                        {tab}
                    </button>
                })}
            </nav>
        </div>
    )
}

export default CodeBar;