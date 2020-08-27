<script>
    export let states;
</script>

<style>
    table {
        width: 100%;
    }

    .section {
        padding: 0.5rem 1.5rem;
    }
    th:hover {
        background-image: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%);
        transition: 300ms ease-in-out;
    }
    td:hover {
        background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
        background-blend-mode: multiply,multiply;
        transition: 300ms ease-in-out;
    }
    a {
        color: black;
    }
</style>

<div class="section" id="table">
    <div class="container">
        <table class="table is-bordered is-striped">
            <thead>
            <tr>
                <th>State</th>
                <th>Cases</th>
                <th>Deaths</th>
                <th>Total Tested</th>
            </tr>
            </thead>
            <tbody>
            {#each states as state (state.state)}
                <tr>
                    <td><a href="{state.state}">{state.fullStateName}</a></td>
                    <td>{state.cases}</td>
                    <td>{state.deaths}</td>
                    <td>{state.tested}</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
</div>