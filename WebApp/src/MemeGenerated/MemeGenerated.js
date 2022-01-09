import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from './styles.module.css'
import { useClipboard } from "use-clipboard-copy";

export const MemeGenerated = () => {
    
    const [copied, setCopied] = useState(false);

    const clipboard = useClipboard();
    const history = useNavigate();
    const location = useLocation();
    const url = new URLSearchParams(location.search).get('url');

    const copyLink = () => {
        clipboard.copy(url);
        setCopied(true);
    };

    return(
        <div className={styles.container}>
            <button onClick={() => history('/')} className={styles.home}>
                Make More Memes
            </button>
            { url && <img alt='meme generated' src={url} /> }
            <button onClick={copyLink} className={styles.copy}>
                {copied ? 'Link copied!' : 'Copy link'}
            </button>
        </div>
    );
};
