import {Card} from "antd"


function CryptocurrencyCard(props) {
    
    const currency_info = props.info
    const crypto_price = parseFloat(currency_info.quote.USD.price.toFixed(3))
    const crypto_percent_change_24h = parseFloat(currency_info.quote.USD.percent_change_24h.toFixed(2))
    const cryprto_market_cap = parseFloat(currency_info.quote.USD.market_cap.toFixed(3))
    let cur_color = "black"
    if (crypto_percent_change_24h > 0){
      cur_color = "green"
    } else if (crypto_percent_change_24h < 0){
      cur_color = "red"
    }

    return (
      <div>
      <Card
      title={
        <div className="flex items-center gap-3">
            <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency_info.id}.png`}/>
            <span>{currency_info.name}</span>
        </div>
      }
      style={{
        width: 400,
      }}
    >
      <p><b>Текущая цена:</b> {crypto_price} $</p>
      <p><b>Изменение цены за 24 ч.: </b><font color={cur_color}>{crypto_percent_change_24h} %</font></p>
      <p><b>Капитализация:</b> {cryprto_market_cap} $</p>
    </Card>
      </div>
    )
  }
 

export default CryptocurrencyCard