import React,{Component} from 'react';
import { VictoryAxis,VictoryPie,VictoryPolarAxis, VictoryBar,VictoryGroup,VictoryTheme, VictoryChart, VictoryLabel} from 'victory';

const all=[
    {x: 1, y: 27, label: "Expelliarmus"},
    {x: 2, y: 21, label: "Stupefy"},
    {x: 3, y: 13, label: "Avada \nKedavra"},
    {x: 4, y: 13, label: "Expecto \nPatronum"},
    {x: 5, y: 11, label: "Lumos"},
    {x: 6, y: 8, label: "Protego"},
    {x: 7, y: 8, label: "Riddikulus"},
    {x: 8, y: 7, label: "Crucio"},
    {x: 9, y: 6, label: "Accio"},
    {x: 10, y: 6, label: "Wingardium\nLeviosa"}


];

class AllSpells extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-7">
                        <svg  viewBox="0 50 700 600" width={700} height={600}>
                            <VictoryChart
                                width={700}
                                height={600}
                                domainPadding={150}
                            >
                                <VictoryBar
                                    horizontal
                                    name="harry-potter-all-spellls"
                                    data={all}
                                    style={{ labels: { fill: "black" },
                                        data: { fill:"maroon" }} }
                                    labelComponent={
                                        <VictoryLabel
                                            verticalAnchor="middle"
                                            textAnchor="start"
                                            angle={0}/>}
                                />
                                <VictoryAxis
                                    dependentAxis={false}
                                    style={{
                                        tickLabels: {fontSize: 16, padding: 10}
                                    }}
                                >

                                </VictoryAxis>
                            </VictoryChart>
                        </svg>



                    </div>
                    <div className="col-md-5">
                        <div className="title">
                            MOST FREQUENTLY USED SPELLS
                             IN THE EIGHT HARRY POTTER MOVIES
                        </div>
                        <div className="description">
                            Horixontal axis shows the count of spells
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default AllSpells;