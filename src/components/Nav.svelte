<script>
    export let segment;
</script>

<nav class="navbar-top">
    <ul class="navbar-nav">
        <li class="logo">
            <a href="/" class="nav-link" class:is-active={segment === undefined}>
                <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon class="arrow1" fill="black" points="15.5,5 11,5 16,12 11,19 15.5,19 20.5,12"/><polygon class="arrow2" fill="black" points="8.5,5 4,5 9,12 4,19 8.5,19 13.5,12"/></g></g></svg>
                <span class="link-text logo-text">Covid Us</span>
            </a>
        </li>

        <li class="nav-item">
            <a href="/" class="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z"/></svg>
                <span class="link-text">Statistics</span>
            </a>
        </li>

        <li class="nav-item">
            <a href="/" class="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><rect fill="none" height="24" width="24"/><path d="M2,19.99l7.5-7.51l4,4l7.09-7.97L22,9.92l-8.5,9.56l-4-4l-6,6.01L2,19.99z M3.5,15.49l6-6.01l4,4L22,3.92l-1.41-1.41 l-7.09,7.97l-4-4L2,13.99L3.5,15.49z"/></svg>
                <span class="link-text">Chart</span>
            </a>
        </li>

        <li class="nav-item">
            <a href="/" class="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z"/></svg>
                <span class="link-text">Data</span>
            </a>
        </li>

        <li class="nav-item">
            <a href="/about" class="nav-link" class:is-active={segment === 'about'}>
                <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                <span class="link-text">About</span>
            </a>
        </li>
    </ul>
</nav>

<style>

</style>