import React from 'react';
import styles from './cards.module.css';
import CardComponent from './Card/card.js';
import { Typography, Grid } from '@material-ui/core';

//destructured data
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return 'Loading...';
    }

    return (
        <div className={styles.container}>
            <Typography gutterBottom variant="h4" component="h2">Global</Typography>
          <Grid container spacing={3} justify="center">
            <CardComponent
              className={styles.infected}
              cardTitle="Infected"
              value={confirmed.value}
              lastUpdate={lastUpdate}
              cardSubtitle="Number of active cases from COVID-19."
            />
            <CardComponent
              className={styles.recovered}
              cardTitle="Recovered"
              value={recovered.value}
              lastUpdate={lastUpdate}
              cardSubtitle="Number of recoveries from COVID-19."
            />
            <CardComponent
              className={styles.deaths}
              cardTitle="Deaths"
              value={deaths.value}
              lastUpdate={lastUpdate}
              cardSubtitle="Number of deaths caused by COVID-19."
            />
          </Grid>
        </div>
      );
}

export default Cards;


// why cards.module.css
// now cards.css is effective only within cards

// Typography
// like a paragraph text