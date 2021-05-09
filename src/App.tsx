import * as React from 'react'
import HeatMapCalendar from './components/HeatMapCalendar'
import Footer from './components/Footer'
import './App.css'

export default class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">CSGO Statistcs</h1>
                    <p>TOA CSGO statistcs</p>
                </header>
                <HeatMapCalendar />
                <Footer />
            </div>
        )
    }
}
