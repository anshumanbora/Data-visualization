import React,{ Component } from 'react';

const data=[
    {
        category:1,
        weight:32,
        name:"Charms"
    },
    {
        category:2,
        weight:7,
        name:"Curses"
    },

    {
        category:3,
        weight:4,
        name:"Jinxes"
    },


    {
        category:4,
        weight:1,
        name:"Transfigurations"
    },

    {
        category:5,
        weight:1,
        name:"Healing-spells"
    }

];


const traverse = data.map((data) =>
    <div  className="horizontal-float-member" key={data.category}>
        <div >
            <div className="category-name"> {data.name}</div>
            <svg width="300" height="500">
                <circle
                    cx="70"
                    cy="100"
                    r={data.weight*2}
                    stroke="#6c6ce0"
                    strokeWidth="8"
                    fill="#161669"
                />
           <text className="figures" x="65" y="200">{data.weight}</text>
            </svg>


        </div>
    </div>
);

class BubblesSpell extends Component{
    render(){
        return(
            <div className="row">
                <div className=" col-md-8 horizontal-float-container">
                    {traverse}

                </div>
                <div className="col-md-4 title">NUMBER OF SPELLS USED IN EACH CATEGORIES IN THE HARRY POTTER MOVIES
                    <div className="description">Hexe's and counter spells were not used in the movies.
                        Figures below the circle shows the count of unique spells used in that category.
                    </div>
                </div>
            </div>

        );
    }


}

export default BubblesSpell;