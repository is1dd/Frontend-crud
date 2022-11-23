function Pagination({total,page,handlePage}) {
  const onclick =(update)=>{
      const newpage = update+page;
      handlePage(newpage);
  }
  const prev = <button  disabled={page===1} onClick={()=>onclick(-1)} >PREV</button>;
  const currentPage = <button  >{page}</button>;
  const next = <button  disabled={page===total} onClick={()=>onclick(+1)}>NEXT</button>;
  const totalPagesElem = (
    <div> 
      {/* Total Pages: <b >{total}</b>{" "} */}
    </div>
  );
  return (
    <div>
        {prev}
        {currentPage}
         {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;