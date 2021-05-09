import * as React from 'react'
import { ResponsiveCalendar } from '@nivo/calendar'

export default class HeatMapCalendar extends React.Component {
    private data = [
        {day: '2021-04-06', value: 2},
        {day: '2021-04-07', value: 7},
        {day: '2021-04-08', value: 2},
        {day: '2021-04-09', value: 4},
        {day: '2021-04-12', value: 2},
        {day: '2021-04-13', value: 3},
        {day: '2021-04-15', value: 5},
        {day: '2021-04-20', value: 1},
        {day: '2021-04-28', value: 1},
        {day: '2021-04-29', value: 15},
        {day: '2021-04-30', value: 3}
    ]
    
    public render() {
        return (
            <div
                style={{
                    height: 400,
                }}
            >
                <ResponsiveCalendar
                    data={this.data}
                    from="2021-01-02"
                    to="2021-12-31"
                    emptyColor="#eeeeee"
                    colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                    yearSpacing={40}
                    monthBorderColor="#ffffff"
                    dayBorderWidth={2}
                    dayBorderColor="#ffffff"
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'row',
                            translateY: 36,
                            itemCount: 4,
                            itemWidth: 42,
                            itemHeight: 36,
                            itemsSpacing: 14,
                            itemDirection: 'right-to-left'
                        }
                    ]}
                />
            </div>
        )
    }
}
