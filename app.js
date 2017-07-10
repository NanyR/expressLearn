const express= require('express');
const {data}= require('./data/flashcardData.json')
const {cards} = data

const app= express();

app.set('view engine', 'pug')

app.get('/', (req, res)=>{
  res.render('index')
})

app.get('/cards', (req, res)=>{
  const cardNum=Math.floor(Math.random()*(cards.length-1))
  const text= cards[cardNum]
  const templateData= {text}
  res.render('card', templateData)
})

app.listen(3000)
