import * as React from 'react'
import { ResponsiveCalendar } from '@nivo/calendar'

export default class HeatMapCalendar extends React.Component {
    private data = [
        {day: '2021-05-05', value: 1},
        {day: '2021-05-06', value: 2},
        {day: '2021-05-07', value: 1},
        {day: '2021-05-08', value: 2},
        {day: '2021-05-09', value: 1}
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
