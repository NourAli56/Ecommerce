import React, { useState } from "react";
import DataTable from "react-data-table-component";
import './Table.css'
import SinglePagenation from '../../general/Pagination/SinglePagenation'

function Table({ col, row }) {
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 5;
  const pagesVisited = pageNumber * productPerPage;
  const displayArr = row.slice(
    pagesVisited,
    pagesVisited + productPerPage
  );

  const pageCount = Math.ceil(row.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const customStyles = {
    table: {
      style: {
        backgroundColor: `white`
      }
    },
    rows: {
      style: {
        backgroundColor: `white`,
        color: `gray`,
        marginTop: "5px",
        marginBottom: "5px"
      }
    },
    headCells: {
      style: {
        backgroundColor: `var(--background-head-table)`,
        color: `gray`,
        fontSize: "14px",
        fontWeight: 'bold'
      }
    },
  };

  const NoDataComponent = () => (
    <div style={{ color: `gray`, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px', width: '100%', backgroundColor: `white`, padding: "10px" }}>There are no records to display</div>
  );

  return (
    <div style={{ backgroundColor: `white`, marginBottom: "10px", overflow: "auto",minHeight: "300px" }} >
      <DataTable
        columns={col}
        data={displayArr}
        onSelectedRowsChange={() => { }}
        customStyles={customStyles}
        noDataComponent={<NoDataComponent />}
        className="custom-table"
        noHeader
      />
      {pageCount > 1 && (
        <>
          <div className="pagination">
            <SinglePagenation
              pageCount={pageCount}
              changePage={changePage}
            />
          </div>
          <br></br>
        </>
      )}
    </div>
  );
}

export default Table;