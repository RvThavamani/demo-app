import './Content.css'
import React from 'react'
import football from './football.jpg';
import FcLogo from './ind.png';
import News1 from './News1.jpeg';
import News2 from './News2.jpeg';
<script src="https://kit.fontawesome.com/a09398ee20.js" crossorigin="anonymous"></script>


function Content(){
    return(
     <div className='BackgroundPage'>
       <Container/>
     </div>
      
    )
}

export default Content;

///***--------------------------------------------------------***///


function Container(){
    return(
        <div className='Container'>
          <div className='BackgroundLayer'>
           <Childs/>
           <Child/>
           <Childs2/>
          </div>
        </div> 
    )   
}


function Childs(){
    return(
        <div className='Childs'>
         <Head/>
         <Matches/>
         <League/>
         <MatchList/>
         <MatchList/>
         <MatchList/>
         <MatchList/>
         <MatchList/>
         <MatchList/>
        </div>
    )
}
function Child(){
    return(
        <div className='Childs MiddleChild'>
            <MiddleTop/>
            <MiddleBottom/>
        </div>
    )
}
function Childs2(){
    return(
        <div className='Childs'>
         <Head/>
         <MatchResult/>
         <Live/>
         <MatchState/>
         <TopPlayerStates/>
         <Footer/>
        </div>
    )
}

function MiddleTop(){
return(
    <div className='MiddleTop'>
    <div className='MiddleTopLayer'>
        <div className='MiddleTopLayer1'>
          <div className='FcLogo'>
           <img src={FcLogo} alt='Fc Logo' style={{width:"5em"}}/>
          </div>
          <h2>INDIA</h2>
          <p>Total Members: 19</p>
        </div>
        <div className='MiddleTopLayer2'>
          <div className='ManageTeam'>Manage Team</div>
        </div>
    </div>
        <img src={football} alt='FOOT BALL'/>
    </div>

)
}

function MiddleBottom(){
    return(
        <div className='MiddleBottom'>
         <div className='TopLayer'></div>
         <p className='TeamRank'>Team Rankings</p>
         <table className='Table'>
            <tr>
                <th className='pos'>POS</th>
                <th className='east'>EAST</th>
                <th className='w'>W</th>
                <th className='l'>L</th>
                <th className='pct'>PCT</th>
            </tr>
            <tr>
                <td className='pos posdata'>1</td>
                <td className='east'><div className='profile'><i class="fa-solid fa-circle-user"></i></div><span className='eastName'>Leo Messi</span></td>
                <td className='w'>97</td>
                <td className='l'>21</td>
                <td className='pct pctdata'>.993</td>
            </tr>
            <tr>
                <td className='pos posdata'>2</td>
                <td className='east'><div className='profile'><i class="fa-solid fa-circle-user"></i></div><span className='eastName'>Neymar JR</span></td>
                <td className='w'>82</td>
                <td className='l'>23</td>
                <td className='pct pctdata'>.973</td>
            </tr>
            <tr>
                <td className='pos posdata'>3</td>
                <td className='east'><div className='profile'><i class="fa-solid fa-circle-user"></i></div><span className='eastName'>C Ronaldo</span></td>
                <td className='w'>76</td>
                <td className='l'>18</td>
                <td className='pct pctdata'>.964</td>
            </tr>
         </table>
         <p className='LatestName'>Latest News</p>
         <div className='LatNews'>
            <div className='News FirstNews'><img src={News1} alt='News1' />
              <div className='Like'><i class="fa-regular fa-heart"></i>19.3k</div>
            </div>
            <div className='News SecondNews'><img src={News2} alt='News2' />
            <div className='Like'><i class="fa-solid fa-heart"></i>27.6k</div>
            </div>
         </div>

        </div>
    )
 }


function Head(){
    return(
        <div className='Header'>
            <div className='Icons'><span className='TimeText'>9:13</span></div>
            <div className='Icons'>
                <div className='Icon'><i class="fa-solid fa-signal"></i></div>
                <div className='Icon'><i class="fa-solid fa-wifi"></i></div>
                <div className='Icon'><i class="fa-solid fa-battery-three-quarters"></i></div>
            </div>
        </div>
    )
}

function Matches(){
    return(
        <div className='MatcheAndResults'>
            <div className='IconChild'><i class="fa-solid fa-chevron-left"></i></div>
            <div className='TextChild'>
                Matches
            </div>
            <div className='IconChild'></div>
        </div>
    )
}
function MatchResult(){
    return(
        <div className='MatcheAndResults'>
            <div className='IconChild'><i class="fa-solid fa-chevron-left"></i></div>
            <div className='TextChild'>
                Match Results
            </div>
            <div className='IconChild'></div>
        </div>
    )
}

function League(){
    return(
        <div className='LeagueHead'>
            <div className='LeagueLeft'><span className='KingIcon'><i class="fa-solid fa-crown"></i></span><span>Premier League</span></div>
            <div className='LeagueRight'><span className='FootBallIcon'><i class="fa-regular fa-futbol"></i></span><span className='Laliga'>La Liga</span></div>
        </div>
    )
}

function MatchList(){
    return(
        <div className='MatchList'>
         <div className='MatchListTop'>
            <div className='MatchLIstChild1'>
                <div className='MLC1 ind liveind'>IND</div>
                <div className='MLC2'><i class="fa-brands fa-gg-circle"></i></div>
            </div>
            <div className='MatchLIstChild2'>
                <div className='MLCtimeDate MLCdate'>19:39</div>
                <div className='MLCtimeDate MLCtime'>7 JULY</div>
            </div>
            <div className='MatchLIstChild3'>
            <div className='MLC2'><i class="fa-solid fa-circle-radiation"></i></div>
            <div className='MLC1 lank'>PAK</div>
            </div>
         </div>
         <div className='MatchListBottom'>Cheppak Stadium, Chennai-28</div>
        </div>
    )
}


function Live(){
    return(
        <div className='LiveTable'>
             <div className='MatchListTop'>
            <div className='MatchLIstChild1'>
                <div className='MLC1 ind'>IND</div>
                <div className='MLC2'><i class="fa-brands fa-gg-circle"></i></div>
                 7
            </div>
            <div className='MatchLIstChild2'>
                <div className='MLCtimeDate Livedate'>End 9th</div>
               
            </div>
            <div className='MatchLIstChild3'>
                3
            <div className='MLC2'><i class="fa-solid fa-circle-radiation"></i></div>
            <div className='MLC1 lank'>PAK</div>
            </div>
         </div>
         <div className='MatchListBottom'>Cheppak Stadium, Chennai-28</div>
         <div className='Live'>Live</div>
        </div>
       
    )
}


 function MatchState() {
  return (
    <div className='MatchState'>
        <div className='MStittle'>Match State</div>
        <div className='MSlogo'>
        <div className='MatchListTop'>
            <div className='MatchLIstChild1'>
                <div className='MLC1 ind'>IND</div>
                <div className='MLC2'><i class="fa-brands fa-gg-circle"></i></div>
            </div>
            <div className='MatchLIstChild2'>
                <div className='MLCtimeDate stateBall'><i class="fa-regular fa-futbol"></i></div>
               
            </div>
            <div className='MatchLIstChild3'>
            <div className='MLC2'><i class="fa-solid fa-circle-radiation"></i></div>
            <div className='MLC1 lank'>PAK</div>
            </div>
         </div>
        </div>
        <div className='Child '>
            <div className='point p1'>6</div>
            <div className='point points'>SoT</div>
            <div className='point p2'>3</div>
        </div>
        <div className='Child'>
        <div className='point p1'>53.7</div>
            <div className='point points'>Possession %</div>
            <div className='point p2'>47.6%</div>
        </div>
        <div className='Child'>
        <div className='point p1'>765</div>
            <div className='point points'>Touches</div>
            <div className='point p2'>927</div>
        </div>
        <div className='Child'>
        <div className='point p1'>628</div>
            <div className='point points'>Passes</div>
            <div className='point p2'>652</div>
        </div>
        <div className='Child'>
        <div className='point p1'>7</div>
            <div className='point points'>Shots</div>
            <div className='point p2'>4</div>
        </div>
    </div>
  )
}


function TopPlayerStates() {
    return (
      <div className='MatchState'>
          <div className='MStittle'>TopPlayerStates </div>
          <div className='MSlogo'>
          <div className='MatchListTop'>
              <div className='MatchLIstChild1'>
                  <div className='MLC1 ind'>IND</div>
                  <div className='MLC2'><i class="fa-brands fa-gg-circle"></i></div>
              </div>
              <div className='MatchLIstChild2'>
                  <div className='MLCtimeDate stateBall'><i class="fa-regular fa-futbol"></i></div>
                 
              </div>
              <div className='MatchLIstChild3'>
              <div className='MLC2'><i class="fa-solid fa-circle-radiation"></i></div>
              <div className='MLC1 lank'>PAK</div>
              </div>
           </div>
          </div>
          <div className='Child '>
              <div className='point p1'>Luke</div>
              <div className='point points'>GoalKee</div>
              <div className='point p2'>Wright</div>
          </div>
          <div className='Child'>
          <div className='point p1'>Berg</div>
              <div className='point points'>Defender</div>
              <div className='point p2'>Lesner</div>
          </div>
          <div className='Child'>
          <div className='point p1'>715</div>
              <div className='point points'>Touches</div>
              <div className='point p2'>627</div>
          </div>
      </div>
    )
  }
  
function Footer() {
    return (
      <div className='footer'>
       <div className='FooterChilds fcHome'><i class="fa-solid fa-house"></i></div>
       <div className='FooterChilds'><i class="fa-solid fa-comment-dots"></i></div>
       <div className='FooterChilds'><i class="fa-solid fa-magnifying-glass"></i></div>
       <div className='FooterChilds'><i class="fa-solid fa-circle-user"></i></div>
      </div>
    )
  }
  
  
  
  
  



