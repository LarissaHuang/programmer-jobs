import React from 'react';
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'

//create cache adaptor instance
const cache = setupCache({
    maxAge: 15 * 60 * 1000
})

// create axios instance passing the newly created cache adapter
const api = axios.create({
    adapter: cache.adapter
})


export default class PersonList extends React.Component {
    state = {
        jobs: []
    }

    componentDidMount() {
        api({
            // Send a GET request to some REST api and cache it
            url: `${'https://cors-anywhere.herokuapp.com/'}https://jobs.github.com/positions.json?description=python&location=new+york`,
            method: 'get'

        }).then(async (res) => {

            console.log(res)

            // Interacting with the store, see `localForage` API.
            const length = await cache.store.length()
            console.log('Cache:', cache);

            console.log('Cache store length:', length)

            // axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://jobs.github.com/positions.json?description=python&location=new+york`, { crossdomain: true }).then(res => {
            //     console.log(res)
            this.setState({ jobs: res.data });
        });
    }

    render() {
        return (
            <ul>
                {this.state.jobs.map(job => <li>{job.title}</li>)}

            </ul>)

    }
}