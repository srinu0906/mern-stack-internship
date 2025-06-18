import { useEffect, useState } from 'react';

const API = 'http://localhost:5000/api/pokemon';

function App() {
  const [cards, setCards] = useState([]);
  const [form, setForm] = useState({ name: '', type: '', image: '' });

  const fetchCards = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      console.log('Fetched:', data); // now should show correct structure
      setCards(data.data); // ✅ fix is here
    } catch (error) {
      console.error('Error fetching cards:', error);
      setCards([]);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const addCard = async () => {
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to add card');
      setForm({ name: '', type: '', image: '' });
      fetchCards();
    } catch (error) {
      console.error('Error adding card:', error);
    }
  };

  const deleteCard = async (id) => {
    try {
      const res = await fetch(`${API}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete card');
      fetchCards();
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Pokémon Cards</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {Array.isArray(cards) &&
          cards.map((card) => (
            <div key={card._id} className='bg-white p-4 rounded-lg shadow-md'>
              <img
                src={card.image}
                alt={card.name}
                className='h-48 w-full object-cover rounded-md'
              />
              <h2 className='text-xl font-semibold mt-2'>{card.name}</h2>
              <p className='text-gray-600'>Type: {card.type}</p>
              <button
                onClick={() => deleteCard(card._id)}
                className='mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
              >
                Delete
              </button>
            </div>
          ))}
      </div>

      <div className='mt-10 max-w-md mx-auto bg-white p-6 rounded-lg shadow'>
        <h2 className='text-xl font-bold mb-4'>Add New Pokémon</h2>
        <input
          className='border p-2 w-full mb-2'
          placeholder='Name'
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className='border p-2 w-full mb-2'
          placeholder='Type'
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        />
        <input
          className='border p-2 w-full mb-2'
          placeholder='Image URL'
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <button
          onClick={addCard}
          className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full'
        >
          Add Pokémon
        </button>
      </div>
    </div>
  );
}

export default App;
