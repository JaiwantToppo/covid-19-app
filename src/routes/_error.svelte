<script>
    export let status;
    export let error;
</script>

<style>
    .message-body {
        margin: 5px;
        padding: 3px;
        border-radius: 3px;
        border-width: 0 0 0 0;
    }

    .section {
        background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
        //background-image: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%);
    }

    .error h1 {
        background: linear-gradient(to top, #f77062 0%, #fe5196 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .not-found h1 {
        background: linear-gradient(to right, #f83600 0%, #f9d423 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

</style>

<svelte:head>
    <title>Error - {status}</title>
</svelte:head>

<body>
<main>
    <div class="section header">
        {#if status !== 404}
            <div class="container error">
                <h1>Error</h1>
                <div class="message-body">
                    <p>{error.message}</p>
                </div>
            </div>
        {/if}
        {#if status === 404}
            <div class="container not-found">
                <h1>Page not Found.</h1>
                <div class="message-body">
                    <a href="/">Click here</a> to go back Home.
                </div>
            </div>
        {/if}
    </div>
</main>
</body>
