import React from 'react';
import * as styles from './Hero.module.css';
import Button from '../Button';
import {Link} from 'gatsby';

const Hero = (props) => {
    const {
        title,
        subtitle,
        ctaText,
        ctaAction,
        image,
        maxWidth,
        ctaStyle,
        ctaLink,
        ctaTo,
        header,
    } = props;
    return (
        <div className={styles.root}>
            <div className={styles.content} style={{width: '90%'}}>
                <iframe width="100%" height="600" src="https://www.youtube.com/embed/m0IiD0IufdY"
                        title="Поздравление из Африки для подруги от африканцев" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default Hero;
