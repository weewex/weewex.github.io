<template>
  <div id="pricegraph" class="graph">
  </div>
</template>

<script>
import ApexCharts from 'apexcharts'

export default {
  name: 'PriceGraph',
  props: ['pricedata'],
  data () {
    return {
      graphObject: {
        init: false,
        holder: {}
      }
    }
  },
  methods: {
    initGraph: function () {
      var options = {
        chart: {
          type: 'line'
        },
        series: [{
          name: 'sales',
          data: this.data
        }],
        xaxis: {
          type: 'datetime',
          categories: this.categories
        }
      }

      var chart = new ApexCharts(document.querySelector('#pricegraph'), options)

      chart.render()

      this.graphObject.holder = chart
      this.graphObject.init = true
    },
    rerenderGraph: function () {
      var options = {
        chart: {
          type: 'line'
        },
        series: [{
          name: 'sales',
          data: this.data
        }],
        xaxis: {
          type: 'datetime',
          categories: this.categories
        }
      }

      this.graphObject.holder.updateOptions(options, true, true, true)
      this.graphObject.holder.render()
    },
    drawGraph: function () {
      if (!this.graphObject.init) {
        this.initGraph()
      } else {
        this.rerenderGraph()
      }
    }
  },
  computed: {
    data: function () {
      let d = []
      for (let i = 0; i < this.pricedata.length; i++) {
        d.push(this.pricedata[i].close)
      }
      return d
    },
    categories: function () {
      let c = []
      for (let i = 0; i < this.pricedata.length; i++) {
        c.push(this.pricedata[i].date)
      }
      return c
    }
  },
  watch: {
    pricedata: function () {
      this.drawGraph()
    },
    graph: function () {
      this.drawGraph()
    }
  }
}
</script>

<style scoped>
.graph{
  width: 100%;
  box-shadow: 0 10px 10px lightgray;
}
</style>
