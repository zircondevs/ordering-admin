/* eslint-disable max-len */
import { Icon1, Icon2 } from "./assets";
import { PropsTypes } from "./types";
import React from "react";
import { PageContainer } from "./styles";


const Paginator = (
	{ onPageChange,  firstLast = false, prevNext, pages = 0, currentPage = 0, type = "standard", limit }: 
PropsTypes) => {
	const lastPage = pages === currentPage;
	const pageNumbers = Array.from({length: pages || 0});
	const isPagesUpToTen = pages > 10; //returns true if total number of page  is more than 10
	const afterFirstThreePages = currentPage > 3; //returns true if the current page number is more than 3
	const plusSevenPages = pages >= currentPage + 7 ? (currentPage + 7) : pages;
	const sevenPagesFoward = afterFirstThreePages ? plusSevenPages : 10;

	let fewPagesBackward: number;
	if (isPagesUpToTen && afterFirstThreePages) {
		fewPagesBackward = currentPage - (10 - (plusSevenPages - currentPage)); //take 3 steps backwards
	} else {
		fewPagesBackward = 0;
	}


	/**
	 *
	 * @param {Array} arr
	 * @returns 10 current page data
	 */
	const getTenPages = (arr: any[]) => arr.slice(fewPagesBackward, sevenPagesFoward);

	const nextPage = type === "nextPage";
	// const standard = type === "standard";
	// const another = type === "another";

	return (
		<PageContainer className={"Container"}>
			<ul className="Paginator">
				{/* first takes you to the first page */}
				{
					nextPage ? null : firstLast ? 
						<li 
							className={`FirstLast ${currentPage === 1 ? "FirstLast-disabled" : ""}`} 
							onClick={() =>  currentPage > 1 && onPageChange(1)}
						>First</li>
						: null
				}

				{/* This left arrow icon return previous page */}
				{nextPage ? null : prevNext && (
					<li 
						style={{ transform: "rotate(90deg)"}} 
						className={`paginator-ListItem ${currentPage === 1 ? "paginator-ListItem-disabled" : ""}`} 
						onClick={() => (currentPage > 1 &&  onPageChange(currentPage - 1))}
					>
						<Icon1 />
					</li>
				)}

				{/* This  is the page numbers which return a maximum of 10 pages at a time*/}
				{nextPage ? null : getTenPages(pageNumbers).map((num: any, index: number) => {
					const active: boolean = currentPage === (index + fewPagesBackward + 1);
					return (
						<li 
							className={`paginator-ListItem ${active ? "paginator-ListItem-active": num}`} 
							key={index} 
							onClick={() => onPageChange(index + fewPagesBackward + 1)}
						>
							<span className={`Items ${active ? "Items-active": ""}`}>
								{index + 1 + fewPagesBackward}
							</span>
						</li>
					);
				})}

				{/* This right arrow icon return next page */}
				{prevNext && (
					<>
						{
							nextPage ? 
								<li 
									onClick={() => !limit && onPageChange()} 
									className={`paginator-ListItem Items-show-more ${limit ? "Items-show-more-disabled" : ""}`}
								>
									<span className={"Items"} >{limit ? "The End" : "Show More"}</span>
								</li>
								:
								<li 
									style={{ transform: "rotate(-90deg)"}}
									onClick={() => ( pages > currentPage && onPageChange(currentPage + 1)) }
									className={`paginator-ListItem ${currentPage === pages ? "paginator-ListItem-disabled" : ""}`}
								>
									<Icon2 />
								</li>
						}
					</>
				)}

				{/* last takes you to the last page */}
				{
					nextPage ? null : firstLast ? 
						<li 
							className={`FirstLast ${ lastPage ? "FirstLast-disabled" : ""}`} 
							onClick={() =>  !lastPage && onPageChange(pages)}
						>Last</li>
						: null
				}
			</ul>
		</PageContainer>
	);
};
 
export default Paginator;