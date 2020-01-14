<script>
  export let pricedata


</script>

<style>
  .pricetable{
    width: 100%;
    box-shadow: 0 10px 10px lightgray;
    margin: 30px 0;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .header{
    width: 50%;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 2px solid #dddddd;
    padding: 10px;
  }

  .cell{
    width: 50%;
    padding: 5px;
    text-align: center;
    border-bottom: 1px solid #dddddd;
  }

  .right-border{
    border-right: 1px solid #dddddd;
  }
</style>

<div class="pricetable">
  <div class="row">
    <div class="header right-border">Date</div>
    <div class="header">Price</div>
  </div>
  {#each pricedata as {date, close}}
  <div class="row">
    <div class="cell right-border">{date}</div>
    <div class="cell">{close}</div>
  </div>
  {/each}
</div>
