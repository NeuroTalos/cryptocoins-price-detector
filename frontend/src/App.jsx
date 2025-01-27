import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import axios from 'axios';
import CryptocurrencyCard from './components/CryptocurrencyCard';


const App = () => {
  const [currencies, setCurrencies] = useState([])
  const [currencyId, setCurrencyId] = useState(1)
  const [currencyData, setCurrencyData] = useState(null)

  // Получаем данные от бэкенда
  const fetchCurrencies = () => {
    axios.get('http://127.0.0.1:8000/cryptocurrencies').then(r => {
      const currenciesResponse = r.data
      let cryptos = []
      for (let i = 0; i < 100; i++){
        let crypto_info = {}
        crypto_info.key = currenciesResponse[i].id
        crypto_info.label = currenciesResponse[i].name
        cryptos.push(crypto_info)
      }
        const menuItems = [
          {
            key: 'g1',
            label: 'Список криптовалют',
            type: 'group',
            children: cryptos
          },
        ];
      setCurrencies(menuItems)
    })
  }

  const fetchCurrency = () => {
    axios.get(`http://127.0.0.1:8000/cryptocurrencies/${currencyId}`).then(r => {
      setCurrencyData(r.data)
    })
  }

  useEffect( () => {
    fetchCurrencies()
  }, [])

  useEffect( () => {
    fetchCurrency()
  }, [currencyId])

  const onClick = (e) => {
    //console.log('click ', e);
    setCurrencyId(e.key)
  };

  return (
    <div className='flex'>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={currencies}
        className="h-screen overflow-scroll"
      />
      <div className="mx-auto my-auto">
        {currencyData != null && <CryptocurrencyCard info={currencyData}/>}
      </div>
    </div>
  );
};
export default App;