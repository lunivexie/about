import { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, CloudLightning, Thermometer, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WeatherWidget() {
  const [weather, setWeather] = useState<{ temp: number; condition: string } | null>(null);
  const [time, setTime] = useState<string>('');
  const [showWeather, setShowWeather] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=-33.4489&longitude=-70.6693&current_weather=true'
        );
        const data = await response.json();
        const current = data.current_weather;
        
        const code = current.weathercode;
        let condition = 'Despejado';
        if (code >= 1 && code <= 3) condition = 'Parcial';
        if (code >= 45 && code <= 48) condition = 'Neblina';
        if (code >= 51 && code <= 67) condition = 'Lluvioso';
        if (code >= 95) condition = 'Tormenta';

        setWeather({
          temp: Math.round(current.temperature),
          condition: condition,
        });
      } catch (error) {
        console.error('Failed to fetch weather:', error);
      } finally {
        setLoading(false);
      }
    }

    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };

    fetchWeather();
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    const toggleInterval = setInterval(() => setShowWeather(prev => !prev), 5000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(toggleInterval);
    };
  }, []);

  const getIcon = (condition: string) => {
    switch (condition) {
      case 'Lluvioso': return <CloudRain className="w-4 h-4 text-vibrant-green/40" />;
      case 'Tormenta': return <CloudLightning className="w-4 h-4 text-vibrant-green/40" />;
      case 'Parcial': return <Cloud className="w-4 h-4 text-vibrant-green/40" />;
      case 'Neblina': return <Cloud className="w-4 h-4 text-vibrant-green/20" />;
      default: return <Sun className="w-4 h-4 text-vibrant-green/40" />;
    }
  };

  if (loading) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm"
    >
      <AnimatePresence mode="wait">
        {showWeather ? (
          <motion.div
            key="weather"
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -5 }}
            className="flex items-center gap-2"
          >
            {weather ? getIcon(weather.condition) : <Thermometer className="w-3 h-3 text-vibrant-green/40" />}
            <span className="text-[10px] tracking-[0.2em] font-light text-mist/40 lowercase">
              {weather?.temp}°c {weather?.condition}
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="time"
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -5 }}
            className="flex items-center gap-2"
          >
            <Clock className="w-3 h-3 text-vibrant-green/40" />
            <span className="text-[10px] tracking-[0.3em] font-light text-mist/40">
              {time} stgo
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
