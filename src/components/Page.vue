<template>
  <div class="container">
    <h1>Apple Inc. Stock Historical Price</h1>
    <price-graph :pricedata="data.pricedata"></price-graph>
    <price-table :pricedata="data.pricedata"></price-table>
  </div>
</template>

<script>
import PriceGraph from './PriceGraph'
import PriceTable from './PriceTable'
export default {
  name: 'Page',
  components: {PriceTable, PriceGraph},
  data () {
    return {
      data: {
        pricedata: {}
      }
    }
  },
  methods: {
    fetchData: function () {
      let self = this
      fetch('https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?serietype=line')
        .then((response) => {
          if (response.ok === true && response.status === 200) {
            return response.json()
          } else {
            return {}
          }
        })
        .then((json) => {
          console.log(json)
          if (Object.length !== 0) {
            self.data.pricedata = json.historical
            let newRange = []
            for (let i = 0; i < self.data.pricedata.length; i++) {
              if (self.data.pricedata[i].date > '2015') {
                newRange.push(self.data.pricedata[i])
              }
            }
            self.data.pricedata = newRange

            self.$forceUpdate()
          }
        })
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style scoped>
.container{
  width: 800px;
  margin: 0 auto;
}

@media screen and (max-width: 835px) {
  .container{
    width: 100%;
    margin: 0;
  }
}
</style>
