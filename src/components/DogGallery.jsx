import React, { useState, useEffect } from 'react';

export const DogGallery = () => {
  const [images, setImages] = useState([]);
  const [inputCount, setInputCount] = useState(0);
  const [fetchCount, setFetchCount] = useState(0); 
  const [updateCount, setUpdateCount] = useState(0); 
  const [isLoading, setIsLoading] = useState(false); 

  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('all');

   useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        if (!response.ok) throw new Error('Ошибка загрузки пород');
        const data = await response.json();
        setBreeds(Object.keys(data.message));
      } catch (error) {
        console.error('Ошибка при получении списка пород:', error);
      }
    };
    fetchBreeds();
  }, []);

  const fetchDogs = async (count, breed) => {
    setIsLoading(true);
    try {
      const url = breed === 'all'
        ? `https://dog.ceo/api/breeds/image/random/${count}`
        : `https://dog.ceo/api/breed/${breed}/images/random/${count}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Ошибка при загрузке данных');
      const data = await response.json();
      
      setImages(data.message);
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDogs(fetchCount, selectedBreed);
    setUpdateCount((prev) => prev + 1);
  }, [fetchCount, selectedBreed]);

  const handleRefresh = () => {
    let validatedCount = Math.max(1, Math.min(50, Number(inputCount) || 1));
    setInputCount(validatedCount);

    if (validatedCount === fetchCount) {
      fetchDogs(validatedCount, selectedBreed);
      setUpdateCount((prev) => prev + 1);
    } else {
      setFetchCount(validatedCount);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>Галерея случайных собак</h2>

      <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
        <label>
          Порода:
          <select 
            value={selectedBreed} 
            onChange={(e) => setSelectedBreed(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px', textTransform: 'capitalize' }}
          >
            <option value="all">Все породы</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <label>
          Количество собак (1-50): 
          <input
            type="number"
            min="1"
            max="50"
            value={inputCount}
            onChange={(e) => setInputCount(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px', width: '60px' }}
          />
        </label>

        <button 
          onClick={handleRefresh} 
          disabled={isLoading}
          style={{ padding: '6px 12px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          {isLoading ? 'Загрузка...' : 'Обновить'}
        </button>

        <span style={{ fontWeight: 'bold' }}>
          Картинки обновлены: {updateCount} раз(а)
        </span>
      </div>

      {isLoading && (
        <div style={{ fontSize: '18px', color: '#666', margin: '20px 0', textAlign: 'center' }}>
          Загрузка...
        </div>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {!isLoading && images.map((url, index) => (
          <div key={index} style={{
            height: '250px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            border: '1px solid #ddd'
          }}>
            <img 
              src={url} 
              alt="Случайная собака" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};