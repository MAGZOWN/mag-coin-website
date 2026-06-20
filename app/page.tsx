'use client';
export default function Home() {
  return (
    <div style={{background:'#000',color:'#fff',minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center',padding:'20px',fontFamily:'Arial'}}>
      <h1 style={{fontSize:'3rem',color:'#FFD700',marginBottom:'10px'}}>MAG COIN</h1>
      <div style={{fontSize:'1.2rem',color:'#ccc',marginBottom:'30px'}}>Make America Great Again — On Base Chain</div>
      
      <div style={{background:'#111',border:'2px solid #FFD700',padding:'15px',borderRadius:'10px',margin:'20px auto',maxWidth:'600px',wordBreak:'break-all'}}>
        0xbbd95ed6eF00031b6E86dDc1f02E4dE793857Ac1
      </div>
      
      <button 
        onClick={() => {navigator.clipboard.writeText('0xbbd95ed6eF00031b6E86dDc1f02E4dE793857Ac1'); alert('CA COPIED!')}}
        style={{background:'#FFD700',color:'#000',border:'none',padding:'15px 30px',fontSize:'1.1rem',fontWeight:'bold',borderRadius:'8px',cursor:'pointer',margin:'10px'}}
      >
        COPY CA
      </button>
      
      <div style={{marginTop:'30px'}}>
        <a href="https://basescan.org/address/0xbbd95ed6eF00031b6E86dDc1f02E4dE793857Ac1" target="_blank" style={{color:'#FFD700',margin:'0 15px'}}>BaseScan</a>
        <a href="https://twitter.com/MagCoinOnBase" target="_blank" style={{color:'#FFD700',margin:'0 15px'}}>Twitter</a>
        <a href="https://t.me/MagCoinBase" target="_blank" style={{color:'#FFD700',margin:'0 15px'}}>Telegram</a>
      </div>
    </div>
  )
}
