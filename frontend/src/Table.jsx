
const Table = (props) => {
    const info=props.info;
    return (
        <>
        <table className="table table-dark table-striped table-responsive">
            <thead>
                <tr>
                    <th>Actual URL</th>
                    <th>Short URL</th>
                    <th>No of Clicks</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {info.map((val)=>{
                    return(
                        <tr>
                            <td><a href={val.fullUrl}>{val.fullUrl}</a></td>
                            <td><a href={'http://localhost:5000/'+val.shortUrl}>{val.shortUrl}</a></td>
                            <td>{val.clicks}</td>
                            <td><img className="delete-icon" src="https://img.icons8.com/plasticine/100/undefined/filled-trash.png" alt="delete logo"/></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default Table;