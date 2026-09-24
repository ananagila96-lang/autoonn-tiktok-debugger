import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health',(req,res)=>{
 res.json({status:'online',project:'Autoonn TikTok Debugger'});
});

app.get('/diagnostics',(req,res)=>{
 res.json({
  client_key: process.env.TIKTOK_CLIENT_KEY ? 'CONFIGURADO':'AUSENTE',
  redirect_uri: process.env.REDIRECT_URI || 'AUSENTE',
  status:'aguardando teste TikTok'
 });
});

app.listen(process.env.PORT || 3000,()=>console.log('Debugger online'));
