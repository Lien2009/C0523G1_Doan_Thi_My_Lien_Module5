function PageList(page){
    const {currentPage,totalItem,onPageChange,sizePage } = page;
    const totalPages = Math.ceil(totalItem/sizePage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
            <button
            key={i}
            onClick={() => onPageChange(i)}
            className={currentPage === i ?"on":""}
            >{i}</button>
        );
    }
    return(
        <div>
            <nav style={{marginLeft: "230px", marginTop: "20px"}} aria-label="Page navigation example">
                <ul className="pagination" style={{marginLeft: "37%"}}>
                    {pageNumbers.map(page =>(
                        <li className="page-item">{page}</li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
export default PageList;