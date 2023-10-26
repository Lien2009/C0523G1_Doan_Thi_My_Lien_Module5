import axios from "axios";

export default function covidList({covid}) {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr>
                </thead>
                <tbody>
                {
                    covid ?
                        covid.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.date}</td>
                                    <td>{item.confirmed}</td>
                                    <td>{item.active}</td>
                                    <td>{item.recovered}</td>
                                    <td>{item.deaths}</td>
                                </tr>
                            )
                        })
                        : (
                            <tr>
                                <td colSpan={6}>No data</td>
                            </tr>
                        )
                }
                </tbody>
            </table>
        </>
    );
}

export const getStaticProps = async () => {
    const URL2 = "https://api.covid19api.com/total/country/vietnam";
    const response = await axios.get(URL2);
    return {
        props: {
            covids: response.data
        }
    }
}