<script>
  import {onMount} from 'svelte'
  import ApexCharts from 'apexcharts'
  export let pricedata;

  let data = [], categories = [];

  $: {
    for(let i = 0; i < pricedata.length; i++){
      data = [...data, pricedata[i].close];
      categories = [...categories, pricedata[i].date];
    }
  }

  $: {
    if(pricedata.length !== 0 && data.length !== 0) {

      let options = {
        chart: {
          type: 'line'
        },
        series: [{
          name: 'sales',
          data: data
        }],
        xaxis: {
          type: 'datetime',
          categories: categories
        }
      };

      let chart = new ApexCharts(document.querySelector('.graph'), options);
      chart.render()
    }
  }

</script>

<style>
  .graph{
    box-shadow: 0 10px 10px lightgray;
  }
</style>

<div class="graph"></div>
