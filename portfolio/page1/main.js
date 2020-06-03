`use strict`;

{
    const btn=document.getElementById(`btn`);

    btn.addEventListener(`click`,()=>{
        const results=[`大吉`,`中吉`,`小吉`,`末吉`,`凶`];
        btn.textContent=results[Math.floor(Math.random()*results.length)];
        
        // 確率設定
        const n=Math.random();
        if(n<0.05){
            btn.textContent=`大吉`; //5%
        }else if(n<0.35){
            btn.textContent=`中吉`; //30%
        }else if(n<0.75){
            btn.textContent=`小吉`; //40%
        }else if(n<0.90){
            btn.textContent=`末吉`; //15%
        }else{
            btn.textContent=`凶`; //10%
        }
    });
}
