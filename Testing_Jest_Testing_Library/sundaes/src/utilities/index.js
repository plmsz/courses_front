/** 
 @function formatCurrency
*
* @param {number} amount
*
* @return string
*
*@example
* formatCurrency(0)
* // =>0.00
*
**/ 
 


export function formatCurrency(amount) {
	return new Intl.NumberFormat("en-us", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
	}).format(amount);
}
