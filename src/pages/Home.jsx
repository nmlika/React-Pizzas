import React from 'react'
import { Catigories, Sort, Pizzas} from '../components';


function Home({items}) {
  return (
    <div className="container">
          <div className="content__top">
            <Catigories 
              onClick={(name) => console.log(name)}
              items={['Мясные','Вегетарианская','Гриль', 'Острые' ]}/>
            <Sort items={['популярности','цене','алфавиту' ]} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">

            {
              items.map(obj => (
                <Pizzas 
                key={obj.id} 
                {...obj}
                />)
              )
            }
</div>
</div>
       
  )
}

export default Home