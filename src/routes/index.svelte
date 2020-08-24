<script context="module">
    import requests from '../data/requests.js';
    export async function preload() {
        try {
            const usStats = await requests.usStats();
            const historic = await requests.historicUS();
            const statesData = await requests.statesData();
            return { usStats, historic, statesData };
        } catch (e) {
            this.error(500, "There was an error in calling the api. Please try again in 5 mintues.");
        }
    }
</script>

<script>
    import CovidStat from '../components/CovidStat.svelte';
    import CovidChart from '../components/CovidChart.svelte';
    import TableContainer from '../components/TableContainer.svelte';
    import Nav from '../components/Nav.svelte';

    export let usStats;
    export let historic;
    export let statesData;
</script>

<svelte:head>
    <title>Covid 19 US Tracker</title>
</svelte:head>

<body>

<nav>
    <Nav/>
</nav>

<main>
    <div class="section header" id="main">
        <div class="container">
            <h1>COVID-19</h1>
        </div>
    </div>
    <CovidStat {...usStats}/>

    <CovidChart historicData={historic} title="US Covid-19" />

    <TableContainer data="{statesData}"/>
</main>
</body>

<style>
</style>