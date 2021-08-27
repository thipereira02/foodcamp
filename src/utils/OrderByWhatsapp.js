export default function OrderByWhatsapp(categories) {    
	let message = "Olá, gostaria de fazer o pedido:\n";
	let total = 0;

	categories.forEach(c => {
		c.options.filter(o => o.quantity > 0).forEach(p => {
			message += `- ${c.name}: ${p.meal} ${p.quantity > 1 ? `(${p.quantity}x)` : ""}\n`;
			total += p.price * p.quantity;
		});            
	});

	message += `Total: R$ ${total.toFixed(2)}`;

	return message;
}