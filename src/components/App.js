import React,{Component} from 'react';
import Header from './header'
import Footer from "./footer";
import AllSpells from './Visualizations/harry_potter/all_spells';
import BubblesSpell from './Visualizations/harry_potter/bubbles_spell';

class App extends Component{

    render() {

        return(
            <div>
                <div id="header"><Header/></div>
                <div id="body">
                    <AllSpells/>
                    <BubblesSpell/>

                </div>
                <div id="footer"><Footer/></div>
            </div>
        );
    }
}

export default App;