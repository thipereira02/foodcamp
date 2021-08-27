export default function CalculateOrderPrice(categories) {
	let total = 0;

	categories.forEach(c => {
		c.options.filter(o => o.quantity > 0).forEach(p => {
			total += p.price * p.quantity;
		});            
	});
    
	return total;
}