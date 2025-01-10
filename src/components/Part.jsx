import './suggestions.scss'
import profilePic from '../assets/Profile-Pic.png'
import lauraPic from '../assets/laura.png'
import rikkiPic from '../assets/rikkiPic.png'
import elraniPic from '../assets/elrani.png'
import tomaskaPic from '../assets/tomaska.png'
import lucasPic from '../assets/lucas.png'

const Suggestions = () => {
  return (
    <div className='mainContainer'>
        <div className='header'>
            <div className='logoImage'><img src={profilePic} alt="sss" /></div>
            <div><p><span>mediamodifier</span> <span id='color'><br />Mediamodifier. <em>Building Brands</em></span></p></div>
            <div className='switch'>Switch</div>
        </div>
        <div className='suggestionsText'>
            <p>Suggestions For You</p>
            <p>See All</p>
        </div>
        <div>
            <div className="friends">
                <div className='nameImage'><img src={lucasPic} alt="ppp" /></div>
                <div className='nameText'>lucas <br /><span>Followed by mark + 2 more</span></div>
                <div className='follow'>Follow</div>
            </div>
        </div>

        <div>
            <div className="friends">
                <div className='nameImage'><img src={lauraPic} alt="ppp" /></div>
                <div className='nameText'>laura <br /><span>Followed by brandon + 6 more</span></div>
                <div className='follow'>Follow</div>
            </div>
        </div>

        <div>
            <div className="friends">
                <div className='nameImage'><img src={rikkiPic} alt="ppp" /></div>
                <div className='nameText'>rikki <br /><span>Followed by mik + 1 more</span></div>
                <div className='follow'>Follow</div>
            </div>
        </div>

        <div>
            <div className="friends">
                <div className='nameImage'><img src={elraniPic} alt="ppp" /></div>
                <div className='nameText'>elrani <br /><span>Followed by ednamanz + 1 more</span></div>
                <div className='follow'>Follow</div>
            </div>
        </div>

        <div>
            <div className="friends">
                <div className='nameImage'><img src={tomaskaPic} alt="ppp" /></div>
                <div className='nameText'>tomas <br /><span>Followed by katarinasterling + 2 more</span></div>
                <div className='follow'>Follow</div>
            </div>
        </div>
    </div>
  )
}

export default Suggestions;