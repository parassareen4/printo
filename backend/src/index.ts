import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.post('/signup',async(c)=>{
  return c.json({message:'signup'})
})

app.post('/signin',async(c)=>{
  return c.json({message:'signin'})
})

app.post('/blog',async(c)=>{
  return c.json({message:'blog'})
})

app.put('/blog',async(c)=>{
  return c.json({message:'blog'})
})
app.get('/blog/:id',async(c)=>{
  return c.json({message:'blog'})
})

app.get('/blog/bulk',async(c)=>{
  return c.json({message:'blog'})
})

export default app
