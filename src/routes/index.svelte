<script>
    import CovidStat from '../components/CovidStat.svelte';
    import CovidChart from '../components/CovidChart.svelte';
    import TableContainer from '../components/TableContainer.svelte';
    import Nav from '../components/Nav.svelte';
</script>

<body>
<nav>
    <Nav/>
</nav>

<main>
    <CovidStat/>

    <CovidChart/>

    <TableContainer/>
</main>
</body>

