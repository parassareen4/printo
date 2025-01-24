import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.post('/signup',async(c)=>{

})

app.post('/signin',async(c)=>{
  
})

app.post('/blog',async(c)=>{
  
})

app.put('/blog',async(c)=>{
  
})
app.get('/blog/:id',async(c)=>{
  
})

app.get('/blog/bulk',async(c)=>{
  
})

export default app
