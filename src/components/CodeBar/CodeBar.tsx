import { useState } from 'react';
import styles from './CodeBar.module.css';
import CSSEditor from '../CSSEditor';
import HTMLEditor from '../HTMLEditor';
import JSEditor from '../JSEditor';

// interface CodeBarProps { }
interface TabProps {
    name: string;
    component: () => React.JSX.Element
}

const CodeBar = () => {
    const [activeTab, setActiveTab] = useState<string>("html");
    const TABS: TabProps[] = [
        { name: 'html', component: HTMLEditor },
        { name: 'css', component: CSSEditor },
        { name: 'js', component: JSEditor }
    ];

    return (
        <div className={styles.codebar}>
            <nav className={styles.tab}>
                {TABS.map((tab) => {
                    return <button className={`${styles.item} ${activeTab === tab.name ? styles.activeTab : ''}`} onClick={() => { setActiveTab(tab.name) }}>
                        {tab.name}
                    </button>
                })}
            </nav>

            <div className={styles.editor}>
                {TABS.find(tab => tab.name === activeTab).component()}
            </div>
        </div>
    )
}

export default CodeBar;