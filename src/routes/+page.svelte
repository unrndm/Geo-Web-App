<script lang="ts">
	import { greet, Calculator } from 'geo-web-lib';
	let calc = new Calculator();
	calc.add_variable_from_wkt('A', 'MULTIPOLYGON (((0 0, 0 10 , 10 10, 10 0, 0 0)))');
	calc.add_variable_from_wkt('B', 'MULTIPOLYGON (((5 5, 5 15 , 15 15, 15 5, 5 5)))');
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={() => console.log(calc.calculate('intersection'))}>calculate</button>
