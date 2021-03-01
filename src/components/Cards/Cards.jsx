import React from 'react';
import {Grid} from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if (!confirmed) {
        return 'Загрузка...';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <CardComponent
                    className={styles.infected}
                    cardTitle="Заражено"
                    value={confirmed.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Выявлено случаев заболевания"
                />
                <CardComponent
                    className={styles.recovered}
                    cardTitle="Выздоровело"
                    value={recovered.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Выявлено случаев выздоровления"
                />
                <CardComponent
                    className={styles.deaths}
                    cardTitle="Умерло"
                    value={deaths.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Выявлено случаев летального исхода"
                />
            </Grid>
        </div>
    );
};

export default Info;
