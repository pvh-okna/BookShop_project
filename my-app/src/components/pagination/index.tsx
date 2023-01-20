import { PaginateWrapper } from "./style";
import ReactPaginate from "react-paginate";

type PaginationType = {
    changePage: (selectedItem: {selected : number}) => void,
    pageCount: number,
    forcePage: number
}
export const Pagination = ({ changePage, pageCount, forcePage }: PaginationType) => {


    return (
        <>
            <PaginateWrapper>
                {<ReactPaginate
                    forcePage={forcePage}
                    className="pagination"
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={changePage}
                    pageRangeDisplayed={4}
                    pageCount={pageCount < 21 ? pageCount : 20}
                    previousLabel="<"
                />}
            </PaginateWrapper>
        </>
    );
};