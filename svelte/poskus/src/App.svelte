<script>
  import {onMount} from 'svelte'
  import Graph from './Graph.svelte';
  import Table from './Table.svelte';

  let pricedata = [];

  onMount(() => {
    fetch('https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?serietype=line')
      .then((response) => {
        if (response.ok === true && response.status === 200) {
          return response.json()
        } else {
          return {}
        }
      })
      .then((json) => {
        if (Object.keys(json).length !== 0) {
          pricedata = json.historical
          let newRange = []
          for (let i = 0; i < pricedata.length; i++) {
            if (pricedata[i].date > '2015') {
              newRange.push(pricedata[i])
            }
          }
          pricedata = newRange
        }
      })
  })

</script>

<main>
	<h1>Apple Inc. Stock Historical Price</h1>
	<Graph {pricedata}></Graph>
  <Table {pricedata}></Table>
</main>

<style>
	main {
		text-align: center;
		width: 800px;
		margin: 0 auto;
	}

	h1 {
		color: #131234;
	}

	@media (max-width: 835px) {
		main {
      width: 100%;
		}
	}
</style>
