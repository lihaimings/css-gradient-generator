'use client';

import { useState, useEffect, useCallback } from 'react';
import { Copy, Check, RotateCcw, Plus, Trash2, Shuffle } from 'lucide-react';

interface ColorStop {
  id: string;
  color: string;
  position: number;
}

type GradientType = 'linear' | 'radial';

export default function ToolComponent() {
  const [gradientType, setGradientType] = useState<GradientType>('linear');
  const [angle, setAngle] = useState(90);
  const [colorStops, setColorStops] = useState<ColorStop[]>([
    { id: '1', color: '#f43f5e', position: 0 },
    { id: '2', color: '#ec4899', position: 100 },
  ]);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  // Load history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('gradient-history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load history');
      }
    }
  }, []);

  // Generate CSS gradient string
  const generateGradient = useCallback(() => {
    const sortedStops = [...colorStops].sort((a, b) => a.position - b.position);
    const stopsString = sortedStops
      .map((stop) => `${stop.color} ${stop.position}%`)
      .join(', ');

    if (gradientType === 'linear') {
      return `linear-gradient(${angle}deg, ${stopsString})`;
    } else {
      return `radial-gradient(circle, ${stopsString})`;
    }
  }, [gradientType, angle, colorStops]);

  const gradientCSS = generateGradient();

  // Copy CSS to clipboard
  const copyToClipboard = async () => {
    const css = `background: ${gradientCSS};`;
    try {
      await navigator.clipboard.writeText(css);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);

      // Save to history
      const newHistory = [gradientCSS, ...history.filter((h) => h !== gradientCSS)].slice(0, 10);
      setHistory(newHistory);
      localStorage.setItem('gradient-history', JSON.stringify(newHistory));
    } catch (err) {
      console.error('Failed to copy');
    }
  };

  // Add new color stop
  const addColorStop = () => {
    if (colorStops.length >= 5) return;
    const newStop: ColorStop = {
      id: Date.now().toString(),
      color: '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'),
      position: 50,
    };
    setColorStops([...colorStops, newStop]);
  };

  // Remove color stop
  const removeColorStop = (id: string) => {
    if (colorStops.length <= 2) return;
    setColorStops(colorStops.filter((stop) => stop.id !== id));
  };

  // Update color stop
  const updateColorStop = (id: string, field: 'color' | 'position', value: string | number) => {
    setColorStops(
      colorStops.map((stop) =>
        stop.id === id ? { ...stop, [field]: value } : stop
      )
    );
  };

  // Generate random gradient
  const randomGradient = () => {
    const randomColor = () =>
      '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setColorStops([
      { id: '1', color: randomColor(), position: 0 },
      { id: '2', color: randomColor(), position: 100 },
    ]);
    setAngle(Math.floor(Math.random() * 360));
  };

  // Reset to default
  const resetGradient = () => {
    setGradientType('linear');
    setAngle(90);
    setColorStops([
      { id: '1', color: '#f43f5e', position: 0 },
      { id: '2', color: '#ec4899', position: 100 },
    ]);
  };

  // Load from history
  const loadFromHistory = (gradient: string) => {
    // Parse gradient string (simplified)
    const isLinear = gradient.startsWith('linear');
    setGradientType(isLinear ? 'linear' : 'radial');
    
    if (isLinear) {
      const angleMatch = gradient.match(/(\d+)deg/);
      if (angleMatch) setAngle(parseInt(angleMatch[1]));
    }

    // Use Array.from to convert iterator to array
    const colorRegex = /(#[a-fA-F0-9]{6})\s+(\d+)%/g;
    const matches = Array.from(gradient.matchAll(colorRegex));
    const newStops: ColorStop[] = matches.map((match, index) => ({
      id: (index + 1).toString(),
      color: match[1],
      position: parseInt(match[2]),
    }));
    
    if (newStops.length >= 2) {
      setColorStops(newStops);
    }
  };

  return (
    <div className="card">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Preview */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Preview</h3>
          <div
            className="w-full aspect-video rounded-2xl shadow-inner border border-rose-100"
            style={{ background: gradientCSS }}
          />
          
          {/* CSS Output */}
          <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">CSS Code</span>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1 text-rose-400 hover:text-rose-300 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <code className="text-green-400 break-all">
              background: {gradientCSS};
            </code>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-6">
          {/* Gradient Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gradient Type
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setGradientType('linear')}
                className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all ${
                  gradientType === 'linear'
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-200'
                    : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                }`}
              >
                Linear
              </button>
              <button
                onClick={() => setGradientType('radial')}
                className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all ${
                  gradientType === 'radial'
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-200'
                    : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                }`}
              >
                Radial
              </button>
            </div>
          </div>

          {/* Angle (for linear) */}
          {gradientType === 'linear' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Angle: {angle}°
              </label>
              <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => setAngle(parseInt(e.target.value))}
                className="w-full h-2 bg-rose-100 rounded-lg appearance-none cursor-pointer accent-rose-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0°</span>
                <span>90°</span>
                <span>180°</span>
                <span>270°</span>
                <span>360°</span>
              </div>
            </div>
          )}

          {/* Color Stops */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">
                Color Stops ({colorStops.length}/5)
              </label>
              <button
                onClick={addColorStop}
                disabled={colorStops.length >= 5}
                className="flex items-center gap-1 text-sm text-rose-600 hover:text-rose-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
            <div className="space-y-3">
              {colorStops.map((stop) => (
                <div key={stop.id} className="flex items-center gap-3">
                  <input
                    type="color"
                    value={stop.color}
                    onChange={(e) => updateColorStop(stop.id, 'color', e.target.value)}
                    className="w-12 h-10 rounded-lg cursor-pointer border-2 border-rose-200"
                  />
                  <input
                    type="text"
                    value={stop.color}
                    onChange={(e) => updateColorStop(stop.id, 'color', e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg border-2 border-rose-200 focus:border-rose-500 outline-none font-mono text-sm"
                  />
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={stop.position}
                    onChange={(e) => updateColorStop(stop.id, 'position', parseInt(e.target.value) || 0)}
                    className="w-20 px-3 py-2 rounded-lg border-2 border-rose-200 focus:border-rose-500 outline-none text-sm"
                  />
                  <span className="text-gray-500 text-sm">%</span>
                  <button
                    onClick={() => removeColorStop(stop.id)}
                    disabled={colorStops.length <= 2}
                    className="p-2 text-gray-400 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button onClick={randomGradient} className="btn-secondary flex-1 flex items-center justify-center gap-2">
              <Shuffle className="w-4 h-4" />
              Random
            </button>
            <button onClick={resetGradient} className="btn-secondary flex-1 flex items-center justify-center gap-2">
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* History */}
      {history.length > 0 && (
        <div className="mt-8 pt-8 border-t border-rose-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Gradients</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {history.map((gradient, index) => (
              <button
                key={index}
                onClick={() => loadFromHistory(gradient)}
                className="aspect-square rounded-xl shadow-md hover:shadow-lg transition-shadow border border-rose-100"
                style={{ background: gradient }}
                title="Click to load"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
