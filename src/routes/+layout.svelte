<script lang="ts">
  import checkForAppUpdates from '@lib/updater';
    import '../app.css'

    let { children } = $props()

    checkForAppUpdates()
</script>

{@render children()}