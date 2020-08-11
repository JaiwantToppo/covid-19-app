
<script>
    export let cases;
    export let deaths;
    export let recovered;
    export let ventilator;
    export let hospitalized;
    export let icu;
    export let tested;
    export let updated;

</script>
<style>
    .columns {
        margin: 5px;
        padding: 3px;
        border-radius: 3px;
    }

    .column {
        padding: 1.7rem;
    }
    .updated {
        padding: .96rem;
    }
</style>

<div class="section">
    <div class="container">
        <div class="columns">
            <h2 class="is-3 column">Cases: {cases}</h2>
            <h2 class="is-3 column">Deaths: {deaths}</h2>
            <h2 class="is-3 column">Recovered: {recovered}</h2>
            <h2 class="is-3 column updated">Updated: {updated}</h2>
        </div>
    </div>
</div>

<div class="section">
    <div class="container">
        <div class="columns">
            <h2 class="is-3 column">Tested: {tested}</h2>
            <h2 class="is-3 column">Hospitalized: {hospitalized}</h2>
            <h2 class="is-3 column">Total ICU: {icu}</h2>
            <h2 class="is-3 column">Total Ventilator: {ventilator}</h2>
        </div>
    </div>
</div>