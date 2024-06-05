import { useState, useEffect } from "react";
import axios from "axios";
import { AllSummonerStatsType, summonerStats } from "./dashboard-components/gameDataHelpers.ts";
import { combineBySummonerName } from "./dashboard-components/gameDataHelpers.ts";
import KDAChart from "./dashboard-components/charts/KDAChart.tsx";
import DamagePieChart from "./dashboard-components/charts/DamagePieChart.tsx";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";

function Dashboard() {
    const [gamesData, setGamesData] = useState<AllSummonerStatsType>({ totalsPerSummoner: [] });

    useEffect(() => {
        axios.get('api/game-data')
            .then((response) => {
                const data: summonerStats[] = response.data;
                const combinedData = combineBySummonerName(data);
                console.log(combinedData);
                setGamesData(combinedData);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <Container>
                <Typography variant="h3" gutterBottom sx={{paddingTop:4}}>
                    Dashboard
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={7}>
                        <KDAChart gamesData={gamesData} />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <DamagePieChart gamesData={gamesData} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Dashboard;