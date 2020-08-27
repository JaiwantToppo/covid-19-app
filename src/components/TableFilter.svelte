<script>
    export let stateName = "";
    export let sortBy = "name";
</script>

<style>
    input,
    .select,
    select {
        width: 100%;
    }

    .section {
        padding: 1rem;
        background-image: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%);
    }

</style>

<div class="section" id="filter">
    <div class="container">
        <div class="columns is-mobile">
            <div class="column is-6">
                <input
                        type="text"
                        class="input"
                        bind:value={stateName}
                        placeholder="Filter States" />

            </div>
            <div class="column is-6">
                <div class="select">
                    <select bind:value={sortBy}>
                        <option value="name">By State Name</option>
                        <option value="cases">Cases</option>
                        <option value="deaths">Death</option>
                        <option value="tested">Tested</option>
                    </select>
                </div>
            </div>

        </div>

    </div>

</div>