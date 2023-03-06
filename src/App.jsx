import React, {useState, useEffect} from 'react'
import './reset.css'
import './App.scss';



function App(props){

  let [countStorag, setCountStorag] = useState(0);
  let [countTransfer, setCountTransfer] = useState(0);

  let [priceBackblaze, setPriceBackblaze] = useState(0);
  let [priceStorBackblaze, setPriceStorBackblaze] = useState(0);
  let [priceTransBackblaze, setPriceTransBackblaze] = useState(0);
  let [widthBackblaze, setWidthBackblaze] = useState(0)
  let [minBackblaze, setMinBackblaze] = useState(false)

  let [priceBunny, setPriceBunny] = useState(0);
  let [toggleBunny, setToggleBunny] = useState(true);
  let [priceStorBunny, setPriceStorBunny] = useState(0);
  let [priceTransBunny, setPriceTransBunny] = useState(0);
  let [widthBunny, setWidthBunny] = useState(0)
  let [minBunny, setMinBunny] = useState(false)

  let [priceScaleway, setPriceScaleway] = useState(0);
  let [toggleScaleway, setToggleScaleway] = useState(true);
  let [priceStorScaleway, setPriceStorScaleway] = useState(0);
  let [priceTransScaleway, setPriceTransScaleway] = useState(0);
  let [widthScaleway, setWidthScaleway] = useState(0)
  let [minScaleway, setMinScaleway] = useState(false)

  let [priceVultr, setPriceVultr] = useState(0);
  let [priceStorVultr, setPriceStorVultr] = useState(0);
  let [priceTransVultr, setPriceTransVultr] = useState(0);
  let [widthVultr, setWidthVultr] = useState(0)
  let [minVultr, setMinVultr] = useState(false)
  
  const handleChangeStor = (event) =>{
    setCountStorag(countStorag = event.target.value)

    setPriceStorBackblaze((countStorag * 0.005))
    setPriceStorBunny(()=>{return toggleBunny ? (countStorag * 0.01) : (countStorag * 0.02)})
    setPriceStorScaleway(()=>{return toggleScaleway ? (()=>{if(countStorag <= 75){return 0}else{return (countStorag - 75) * 0.06}})() : (()=>{if(countStorag <= 75){return 0}else{return (countStorag - 75) * 0.03}})()});
    setPriceStorVultr((countStorag * 0.01))
    }

  const handleChangeTrans = (event) =>{
    setCountTransfer(countTransfer = event.target.value)

    setPriceTransBackblaze((countTransfer * 0.01))
    setPriceTransBunny((countTransfer * 0.01))
    setPriceTransScaleway(()=>{if(countTransfer <= 75){return 0}else{return (countTransfer - 75) * 0.02}})
    setPriceTransVultr((countTransfer * 0.01))
  }

  useEffect(()=>{
    setPriceBackblaze(()=>{
      if((priceStorBackblaze + priceTransBackblaze) <= 7){
        return 7;
      } else {
        return priceStorBackblaze + priceTransBackblaze;
      }
    });
    setWidthBackblaze(()=>{
      if((priceStorBackblaze + priceTransBackblaze) <= 7){
        return 7 * 10;
      } else {
        return (priceStorBackblaze + priceTransBackblaze) * 10;
      }
    });

    setPriceBunny(()=>{
      if((priceStorBunny + priceTransBunny)>= 10){
        return 10
      } else {
        return priceStorBunny + priceTransBunny;
      }
    });
    setWidthBunny(()=>{
      if((priceStorBunny + priceTransBunny) >= 10){
        return 10 * 10;
      } else {
        return (priceStorBunny + priceTransBunny) * 10;
      }
    });

    setPriceScaleway(()=>{
      return priceStorScaleway + priceTransScaleway;
    })
    setWidthScaleway((priceStorScaleway + priceTransScaleway) * 10);

    setPriceVultr(()=>{
      if((priceStorVultr + priceTransVultr) <= 5){
        return 5;
      } else{
        return priceStorVultr + priceTransVultr;
      }
    })
    setWidthVultr(()=>{
      if((priceStorVultr + priceTransVultr) <= 5){
        return 5 * 10;
      } else{
        return (priceStorVultr + priceTransVultr) * 10;
      }
    })
  },[priceStorBackblaze, priceTransBackblaze,priceStorBunny,priceTransBunny,priceStorScaleway,priceTransScaleway]);

  useEffect(()=>{
    let arr = [priceBackblaze, priceBunny, priceScaleway, priceVultr];
    let min = Math.min(...arr);
    
    if(priceBackblaze === min){
      setMinBackblaze(true)
    } else {setMinBackblaze(false)};

    if(priceBunny === min){
      setMinBunny(true)
    } else{setMinBunny(false)}

    if(priceScaleway === min){
      setMinScaleway (true)
    } else{setMinScaleway (false)}

    if(priceVultr === min){
      setMinVultr(true)
    } else{setMinVultr(false)};
  },[priceBackblaze, priceBunny, priceScaleway, priceVultr])

  const toggleBunnyBtn = ()=>{
    setToggleBunny(!toggleBunny);
    setPriceStorBunny(()=>{return toggleBunny ? (countStorag * 0.02) : (countStorag * 0.01)})
  }

  const toggleScalewayBtn = () => {
    setToggleScaleway(!toggleScaleway);
    setPriceStorScaleway(()=>{return toggleScaleway ? (()=>{if(countStorag <= 75){return 0}else{return (countStorag - 75) * 0.03}})() : (()=>{if(countStorag <= 75){return 0}else{return (countStorag - 75) * 0.06}})()})
  }

  if(window.matchMedia("(min-width: 400px)").matches){
    return(
      <>
      <div className='maincontainer'>
        <div className='sliders'>
          <div className='storage'>
            <div className='slidecontainer'>
              <span>Storege: {countStorag}</span>
              <input type='range' min='0' max='1000' value={countStorag} className='slider' id='myRange' onChange={handleChangeStor}/>
            </div>
          </div>  
          <div className='transfer'>
            <div className='slidecontainer'>
              <span>Transfer: {countTransfer}</span>
              <input type='range' min='0' max='1000' value={countTransfer} className='slider' id='myRange' onChange={handleChangeTrans}/>
            </div>
          </div>
        </div>
        <div className='chartcontainer'>
          <div className='providers'>
                      <div className='providers__item backblaze'>Backblaze</div>
                      <div className='providers__item bunny'><button className='toggleBunny' value={toggleBunny ? "true" : "false"} onClick={toggleBunnyBtn}> {toggleBunny ? "HDD" : "SSD"}</button><span>Bunny</span></div>
                      <div className='providers__item scaleway'><button className='toggleScaleway' value={toggleScaleway ? "true" : "false"} onClick={toggleScalewayBtn}> {toggleScaleway ? "Multi" : "Single"}</button><span>Scaleway</span></div>
                      <div className='providers__item vultr'>Vultr</div>
          </div>
          <div className='chart'>
            <div>
              <div className='chart__item' style ={{width: widthBackblaze, backgroundColor: minBackblaze ? "#f50202" : "#a3a2a2"}}> </div>
              <div className='price' style ={{color: minBackblaze ? "#f50202" : "#a3a2a2"}}>{Math.round(priceBackblaze)}${priceBackblaze === 7 ? " Min!" : null}</div>
            </div>
            <div>
              <div className='chart__item' style ={{width: widthBunny, backgroundColor: minBunny ? "#fa7305" : "#a3a2a2"}}> </div>
              <div className='price' style={{color: minBunny ? "#fa7305" : "#a3a2a2"}}>{Math.round(priceBunny)}${priceBunny === 10 ? " Max!" : null}</div>
            </div>
            <div>
              <div className='chart__item' style ={{width: widthScaleway, backgroundColor: minScaleway ? "#fa05ea" : "#a3a2a2"}}> </div>
              <div className='price' style ={{color: minScaleway ? "#fa05ea" : "#a3a2a2"}}>{Math.round(priceScaleway)}$</div>
            </div>
            <div>
            <div className='chart__item' style ={{width: widthVultr, backgroundColor: minVultr ? "#050dfa" : "#a3a2a2"}}> </div>
            <div className='price' style ={{color: minVultr ? "#050dfa" : "#a3a2a2"}}>{Math.round(priceVultr)}${priceVultr === 5 ? " Min!" : null}</div>                    
            </div>
          </div>
        </div>
      </div>
      </>
    )
  } else {
    return(
      <>
      <div className='maincontainerMob'>
        <div className='chartcontainerMob'>
          <div className='chartMob'>
            <div>
              <div className='chart__itemMob' style ={{width: widthBackblaze, backgroundColor: minBackblaze ? "#f50202" : "#a3a2a2"}}> </div>
              <div className='priceMob' style ={{color: minBackblaze ? "#f50202" : "#a3a2a2"}}>{Math.round(priceBackblaze)}${priceBackblaze === 7 ? " Min!" : null}</div>
            </div>
            <div>
              <div className='chart__itemMob' style ={{width: widthBunny, backgroundColor: minBunny ? "#fa7305" : "#a3a2a2"}}> </div>
              <div className='priceMob' style={{color: minBunny ? "#fa7305" : "#a3a2a2"}}>{Math.round(priceBunny)}${priceBunny === 10 ? " Max!" : null}</div>
            </div>
            <div>
              <div className='chart__itemMob' style ={{width: widthScaleway, backgroundColor: minScaleway ? "#fa05ea" : "#a3a2a2"}}> </div>
              <div className='priceMob' style ={{color: minScaleway ? "#fa05ea" : "#a3a2a2"}}>{Math.round(priceScaleway)}$</div>
            </div>
            <div>
              <div className='chart__itemMob' style ={{width: widthVultr, backgroundColor: minVultr ? "#050dfa" : "#a3a2a2"}}> </div>
              <div className='priceMob' style ={{color: minVultr ? "#050dfa" : "#a3a2a2"}}>{Math.round(priceVultr)}${priceVultr === 5 ? " Min!" : null}</div>                    
            </div>
          </div>
          <div className='providersMob'>
            <div className='providersMob__itemMob backblazeMob'>Backblaze</div>
            <div className='providersMob__itemMob bunnyMob'><button className='toggleBunnyMob' value={toggleBunny ? "true" : "false"} onClick={toggleBunnyBtn}> {toggleBunny ? "HDD" : "SSD"}</button><span>Bunny</span></div>
            <div className='providersMob__itemMob scalewayMob'><button className='toggleScalewayMob' value={toggleScaleway ? "true" : "false"} onClick={toggleScalewayBtn}> {toggleScaleway ? "Multi" : "Single"}</button><span>Scaleway</span></div>
            <div className='providersMob__itemMob vultrMob'>Vultr</div>
          </div>
        </div>
        <div className='slidersMob'>
          <div className='storageMob'>
            <div className='slidecontainerMob'>
              <span>Storege: {countStorag}</span>
              <input type='range' min='0' max='1000' value={countStorag} className='sliderMob' id='myRange' onChange={handleChangeStor}/>
            </div>
          </div>  
          <div className='transferMob'>
            <div className='slidecontainerMob'>
              <span>Transfer: {countTransfer}</span>
              <input type='range' min='0' max='1000' value={countTransfer} className='sliderMob' id='myRange' onChange={handleChangeTrans}/>
            </div>
          </div>
        </div>

      </div>
      </>
    )
}

}

export default App;