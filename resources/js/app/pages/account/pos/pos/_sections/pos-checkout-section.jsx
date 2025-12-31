import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Edit, Trash2, RotateCcw } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: 'Milk', price: 2.50, category: 'Dairy', img: 'https://cdn-icons-png.flaticon.com/128/372/372627.png' },
  { id: 2, name: 'Bread', price: 1.00, category: 'Bakery', img: 'https://cdn-icons-png.flaticon.com/128/422/422160.png' },
  { id: 3, name: 'Eggs', price: 3.00, category: 'Dairy', img: 'https://cdn-icons-png.flaticon.com/128/837/837165.png' },
  { id: 4, name: 'Apple', price: 1.20, category: 'Fruit', img: 'https://cdn-icons-png.flaticon.com/128/415/415682.png' },
  { id: 5, name: 'Orange Juice', price: 2.50, category: 'Beverage', img: 'https://cdn-icons-png.flaticon.com/128/1321/1321742.png' },
  { id: 6, name: 'Potato Chips', price: 1.50, category: 'Snack', img: 'https://cdn-icons-png.flaticon.com/128/2553/2553691.png' },
  { id: 7, name: 'Cheese', price: 4.00, category: 'Dairy', img: 'https://cdn-icons-png.flaticon.com/128/2153/2153788.png' },
  { id: 8, name: 'Yogurt', price: 0.90, category: 'Dairy', img: 'https://cdn-icons-png.flaticon.com/128/2358/2358979.png' },
  { id: 9, name: 'Croissant', price: 1.80, category: 'Bakery', img: 'https://cdn-icons-png.flaticon.com/128/2821/2821805.png' },
  { id: 10, name: 'Banana', price: 0.50, category: 'Fruit', img: 'https://cdn-icons-png.flaticon.com/128/2909/2909761.png' },
  { id: 11, name: 'Coffee', price: 5.50, category: 'Beverage', img: 'https://cdn-icons-png.flaticon.com/128/633/633513.png' },
  { id: 12, name: 'Chocolate Bar', price: 1.25, category: 'Snack', img: 'https://cdn-icons-png.flaticon.com/128/2553/2553642.png' },
  { id: 13, name: 'Butter', price: 3.20, category: 'Dairy', img: 'https://cdn-icons-png.flaticon.com/128/2619/2619550.png' },
  { id: 14, name: 'Bagel', price: 1.10, category: 'Bakery', img: 'https://cdn-icons-png.flaticon.com/128/1232/1232448.png' },
  { id: 15, name: 'Water Bottle', price: 1.00, category: 'Beverage', img: 'https://cdn-icons-png.flaticon.com/128/3100/3100566.png' },
  { id: 16, name: 'Grapes', price: 2.75, category: 'Fruit', img: 'https://cdn-icons-png.flaticon.com/128/7290/7290117.png' },
  { id: 17, name: 'Muffin', price: 2.25, category: 'Bakery', img: 'https://cdn-icons-png.flaticon.com/128/2261/2261214.png' },
  { id: 18, name: 'Soda', price: 1.50, category: 'Beverage', img: 'https://cdn-icons-png.flaticon.com/128/2405/2405479.png' },
  { id: 19, name: 'Cookies', price: 3.00, category: 'Snack', img: 'https://cdn-icons-png.flaticon.com/128/541/541732.png' },
  { id: 20, name: 'Ice Cream', price: 4.50, category: 'Dairy', img: 'https://cdn-icons-png.flaticon.com/128/938/938063.png' },
];

export default function POSCheckout() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [amountPaid, setAmountPaid] = useState(0);
  const [heldSales, setHeldSales] = useState([]);

  // Load held sales from localStorage on start
  useEffect(() => {
    const saved = localStorage.getItem('heldSales');
    if (saved) setHeldSales(JSON.parse(saved));
  }, []);

  // Save held sales whenever they change
  useEffect(() => {
    localStorage.setItem('heldSales', JSON.stringify(heldSales));
  }, [heldSales]);

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tax = subtotal * 0.06; // 6% tax
  const grandTotal = subtotal + tax;
  const changeDue = Math.max(0, amountPaid - grandTotal);

  // Handlers
  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
    ).filter(item => item.qty > 0));
  };

  const holdSale = () => {
    if (cart.length === 0) return alert("Cannot hold an empty cart");
    const newHold = {
      id: Date.now(),
      items: cart,
      total: grandTotal,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setHeldSales([...heldSales, newHold]);
    setCart([]);
    setAmountPaid(0);
  };

  const restoreSale = (sale) => {
    if (cart.length > 0 && !window.confirm("Overwrite current cart with held sale?")) return;
    setCart(sale.items);
    setHeldSales(heldSales.filter(h => h.id !== sale.id));
  };

  const filteredProducts = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" bg-gray-100  font-sans">
      <div className=" grid grid-cols-12 gap-4 bg-white overflow-hidden border border-gray-200 h-[90vh]">
        
        {/* LEFT: PRODUCTS (5 Columns) */}
        <section className="col-span-12 lg:col-span-4 border-r flex flex-col p-4 bg-white overflow-auto">
          <div className="relative mb-4">
            <input 
              type="text" 
              placeholder="Search product..." 
              className="w-full border p-2 pl-10 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 overflow-y-auto pr-2">
            {filteredProducts.map(product => (
              <div key={product.id} className="border rounded-lg p-2 text-center hover:shadow-md transition bg-gray-50">
                <img src={product.img} alt={product.name} className="w-12 h-12 mx-auto mb-2 opacity-80" />
                <p className="text-xs font-bold truncate">{product.name}</p>
                <p className="text-blue-600 text-xs mb-2">${product.price.toFixed(2)}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-blue-600 text-white text-[10px] py-1 rounded uppercase font-bold hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* MIDDLE: CART (5 Columns) */}
        <section className="col-span-12 py-3 lg:col-span-5 border-r flex flex-col overflow-auto">
          <div className="bg-blue-600 text-white p-3 font-bold flex justify-between">
            <span>Current Sale</span>
            <span className="text-xs opacity-80">{new Date().toLocaleDateString()}</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2">
            <table className="w-full text-sm">
              <thead className="text-gray-500 border-b">
                <tr>
                  <th className="py-2 text-left">Item</th>
                  <th className="py-2 text-center">Qty</th>
                  <th className="py-2 text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3 font-medium">{item.name}</td>
                    <td className="py-3">
                      <div className="flex items-center justify-center gap-2">
                        <button onClick={() => updateQty(item.id, -1)} className="px-2 border rounded bg-white">-</button>
                        <span>{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="px-2 border rounded bg-white">+</button>
                      </div>
                    </td>
                    <td className="py-3 text-right font-bold">${(item.price * item.qty).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-gray-50 border-t space-y-2">
            <div className="flex justify-between text-sm"><span>Subtotal</span> <span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between text-sm"><span>Tax (6%)</span> <span>${tax.toFixed(2)}</span></div>
            <div className="flex justify-between text-xl font-black border-t pt-2">
              <span>Total</span> <span>${grandTotal.toFixed(2)}</span>
            </div>
            <div className="flex gap-2 pt-2">
              <button onClick={() => setCart([])} className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded font-bold hover:bg-gray-100"><Trash2 size={16}/> Clear</button>
              <button onClick={holdSale} className="flex-1 bg-red-500 text-white py-2 rounded font-bold hover:bg-red-600">Hold Sale</button>
            </div>
          </div>
        </section>

        {/* RIGHT: PAYMENT & HELD (2 Columns) */}
        <section className="col-span-12 lg:col-span-3 p-4 flex flex-col bg-gray-50">
          <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2 border-b pb-2"><ShoppingCart size={18}/> Checkout</h3>
          
          <div className="space-y-4 flex-1">
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase">Amount Paid</label>
              <input 
                type="number" 
                value={amountPaid}
                onChange={(e) => setAmountPaid(parseFloat(e.target.value) || 0)}
                className="w-full p-3 border rounded text-2xl font-bold text-right focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded border">
              <span className="text-sm text-gray-500">Change Due</span>
              <span className="text-2xl font-black text-green-600">${changeDue.toFixed(2)}</span>
            </div>

            <button className="w-full bg-green-600 text-white py-4 rounded-xl font-black text-xl shadow-lg hover:bg-green-700 active:scale-95 transition-all">
              COMPLETE SALE
            </button>

            {/* HELD SALES LIST */}
            {heldSales.length > 0 && (
              <div className="mt-8 border-t pt-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Held Sales ({heldSales.length})</p>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {heldSales.map(sale => (
                    <div key={sale.id} className="flex justify-between items-center p-2 bg-yellow-100 border border-yellow-200 rounded text-xs">
                      <div>
                        <p className="font-bold">{sale.time}</p>
                        <p className="text-gray-600">${sale.total.toFixed(2)}</p>
                      </div>
                      <button 
                        onClick={() => restoreSale(sale)}
                        className="p-1 bg-white rounded shadow hover:text-blue-600"
                      >
                        <RotateCcw size={14}/>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}