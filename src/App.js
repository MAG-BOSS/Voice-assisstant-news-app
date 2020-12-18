import React , {useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards.js'

const alanKey = '82ea6583b48aee86c1cbfe317c02cfb82e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{
    const [newsArticles , setNewsArticles] = useState([]);

    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles})=>{
                if(command === 'newHeadlines'){
                    console.log(articles);
                }
            }
        })
    },[])

    return(
        <div>
            <h1>Alan AI News App</h1>
            <NewsCards articles={newsArticles} />
        </div>
    );
}

export default App;