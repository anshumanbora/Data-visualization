import React from 'react';
import { VictoryAxis,VictoryPie,VictoryPolarAxis, VictoryBar,VictoryGroup,VictoryTheme, VictoryChart, VictoryLabel} from 'victory';


const one=[
    {x: 1, y: 4, label: "Alohomora"},
    {x: 2, y: 5, label: "Wingardium\nLeviosa"},
    {x: 3, y: 1, label: "Petrificus\nTotalus"},

];






class Visualization extends React.Component {
    render() {
        return (
            <div>
                <svg width={400} height={400}>
                <VictoryChart polar

                              width={400} height={400}

                              theme={VictoryTheme.material}
                >
                    {
                        ["Lumos\n11\n","Expelliarmus\n27", "Stupefy\n21\n",  "\nExpecto Patronum\n13", "Avada Kedavra\n13\n"].map((d, i) => {
                            return (
                                <VictoryPolarAxis dependentAxis
                                                  key={i}
                                                  label={d}
                                                  labelPlacement="perpendicular"
                                                  style={{ tickLabels: { fill: "none" } }}
                                                  axisValue={i}
                                />
                            );
                        })
                    }
                    <VictoryBar
                        style={{ data: { fill: "tomato", width: 75 , stroke: "#fff"} }}
                        data={[
                            { x: 0, y: 11 },
                            { x: 1, y: 27 },
                            { x: 2, y: 21 },
                            { x: 3, y: 13 },
                            { x: 4, y: 13 }
                        ]}
                    />
                </VictoryChart>
                </svg>






                <svg  width={800} height={300}>
                    <VictoryChart

                        domainPadding={100}
                    >
                    <VictoryBar
                        name="series-1"
                        data={one}
                        style={{ labels: { fill: "black" } }}
                        labelComponent={
                            <VictoryLabel
                            verticalAnchor="middle"
                            textAnchor="start"
                            angle={-90}/>}
                    />
                    <VictoryAxis
                        dependentAxis
                        style={{
                            tickLabels: {fontSize: 16, padding: 10}
                        }}
                    >

                    </VictoryAxis>
                    </VictoryChart>
                </svg>


                <svg viewBox="0 0 800 300 " width={800} height={300}>
                    <VictoryChart

                        domainPadding={100}
                    >
                        <VictoryBar
                            name="series-1"
                            data={two}
                            style={{ labels: { fill: "black" } }}
                            labelComponent={
                                <VictoryLabel
                                    verticalAnchor="middle"
                                    textAnchor="start"
                                    angle={-90}/>}
                        />
                        <VictoryAxis
                            dependentAxis
                            style={{
                                tickLabels: {fontSize: 16, padding: 10}
                            }}
                        >

                        </VictoryAxis>
                    </VictoryChart>
                </svg>


                <svg width={800} height={300}>
                <VictoryChart

                    domainPadding={100}
                >
                    <VictoryBar
                        name="series-1"
                        data={three}
                        style={{ labels: { fill: "black" } }}
                        labelComponent={
                            <VictoryLabel
                                verticalAnchor="middle"
                                textAnchor="start"
                                angle={-90}/>}
                    />
                    <VictoryAxis
                        dependentAxis
                        style={{
                            tickLabels: {fontSize: 16, padding: 10}
                        }}
                    >

                    </VictoryAxis>
                </VictoryChart>
            </svg>



                <svg width={800} height={300}>
                <VictoryChart

                    domainPadding={100}
                >
                    <VictoryBar
                        name="series-1"
                        data={four}
                        style={{ labels: { fill: "black" } }}
                        labelComponent={
                            <VictoryLabel
                                verticalAnchor="middle"
                                textAnchor="start"
                                angle={-90}/>}
                    />
                    <VictoryAxis
                        dependentAxis
                        style={{
                            tickLabels: {fontSize: 16, padding: 10}
                        }}
                    >

                    </VictoryAxis>
                </VictoryChart>
            </svg>



                <svg width={800} height={300}>
                <VictoryChart

                    domainPadding={100}
                >
                    <VictoryBar
                        name="series-1"
                        data={five}
                        style={{ labels: { fill: "black" } }}
                        labelComponent={
                            <VictoryLabel
                                verticalAnchor="middle"
                                textAnchor="start"
                                angle={-90}/>}
                    />
                    <VictoryAxis
                        dependentAxis
                        style={{
                            tickLabels: {fontSize: 16, padding: 10}
                        }}
                    >

                    </VictoryAxis>
                </VictoryChart>
            </svg>

                <svg width={800} height={300}>
                    <VictoryChart

                        domainPadding={100}
                    >
                        <VictoryBar
                            name="series-1"
                            data={six}
                            style={{ labels: { fill: "black" } }}
                            labelComponent={
                                <VictoryLabel
                                    verticalAnchor="middle"
                                    textAnchor="start"
                                    angle={-90}/>}
                        />
                        <VictoryAxis
                            dependentAxis
                            style={{
                                tickLabels: {fontSize: 16, padding: 10}
                            }}
                        >

                        </VictoryAxis>
                    </VictoryChart>
                </svg>
            </div>
        );
    }
}






export default Visualization;
