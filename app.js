const express= require('express');
const {data}= require('./data/flashcardData.json')
const {cards} = data

const app= express()

app.set('view engine', 'pug')

app.get('/', (req, res)=>{
  res.render('index')
})

app.get('/cards', (req, res)=>{
  res.render('cards', {cards})
})

app.get('/cards/:id', (req, res)=>{
  const {side}= req.query
  const {id}=req.params
  const text= cards[id][side]
  const templateData= {id, text}
  templateData.random=Math.floor(Math.random()*(cards.length-1))
  res.render('card', templateData)
})



app.listen(3000)
