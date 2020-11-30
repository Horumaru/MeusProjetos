<script>
if (window.performance) {
    console.info("window.performance works fine on this browser");
}
console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    console.info("This page is reloaded");
} else {
    console.info("This page is not reloaded");
    dataLayer.push({
        'event': 'PageNotReload_Renan'
    });
}
</script>