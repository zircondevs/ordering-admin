import styled from "styled-components";
import { Flex, Grid } from "../../../../components";




 
 

export const Styles =  styled("div")`
	margin: -40px 0px 40px;
	justify-content: flex-start;
	background-color: ${({ theme }) => theme.palette.Grey["8"]};
	width: auto;
	padding: 20px 40px;
	border-bottom:  1px solid ${({ theme }) => theme.palette.Grey["5"]};
	@media (max-width: 1200px) {
		padding: 20px  4%;
	}
`;

export const MetricsStyles =  styled(Grid)`
	grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
	justify-content: flex-start;
	width: auto;
	gap: 20px;
`;

export const CollapseBtnStyles =  styled("button")`
		border-bottom:  1px solid ${({ theme }) => theme.palette.common["transparent"]};
	 &:hover{
		border-bottom:  1px solid ${({ theme }) => theme.palette.Orange["default"]};

	 }
`;

export const MetricsCardStyles =  styled(Flex)`
	padding: 15px ;
	border:  1px solid ${({ theme }) => theme.palette.Grey["5"]};
	border-radius: 8px;
	max-width: 400px;
	align-items: stretch;
	& > div:first-child{
		margin-right: 15px;
		border-radius: 8px;
		overflow: hidden;
		& *{
			height: 100% !important;
			width: 100% !important;
		}
		img {
			object-fit: cover;
		}

	}
	& > div:last-child{
		flex:  1;

	}
`;
 
 

 
 
 