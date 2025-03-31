import React, { useState, useEffect, useMemo } from 'react';
import { Scale, Calculator, DollarSign } from 'lucide-react';

function Home() {
  const [weight, setWeight] = useState<string>('');
  const [carat, setCarat] = useState<string>('9');
  const [price, setPrice] = useState<number>(0);
  const [livePrice, setLivePrice] = useState<number>(3083.80);
  const [isFlashing, setIsFlashing] = useState(false);
  const [weightUnit, setWeightUnit] = useState<'g' | 'oz'>('g');

  // Calculate price data based on live price
  const priceData = useMemo(() => [
    { type: '24k Gold Items', pricePerGram: +(livePrice / 31.1035).toFixed(2), pricePerOz: +livePrice.toFixed(2) },
    { type: '22k Gold Items', pricePerGram: +((livePrice * 22/24) / 31.1035).toFixed(2), pricePerOz: +(livePrice * 22/24).toFixed(2) },
    { type: '20k Gold Items', pricePerGram: +((livePrice * 20/24) / 31.1035).toFixed(2), pricePerOz: +(livePrice * 20/24).toFixed(2) },
    { type: '18k Gold Items', pricePerGram: +((livePrice * 18/24) / 31.1035).toFixed(2), pricePerOz: +(livePrice * 18/24).toFixed(2) },
    { type: '14k Gold Items', pricePerGram: +((livePrice * 14/24) / 31.1035).toFixed(2), pricePerOz: +(livePrice * 14/24).toFixed(2) },
    { type: '9k Gold Items', pricePerGram: +((livePrice * 9/24) / 31.1035).toFixed(2), pricePerOz: +(livePrice * 9/24).toFixed(2) },
    { type: '1oz 999 Gold Bar', pricePerGram: null, pricePerOz: +livePrice.toFixed(2), special: true },
    { type: 'Gold Sovereigns', pricePerGram: null, pricePerOz: +(livePrice * 22/24).toFixed(2), special: true, unit: 'Coin' }
  ], [livePrice]);

  useEffect(() => {
    const interval = setInterval(() => {
      const variation = (Math.random() - 0.5) * 2;
      setLivePrice(prev => {
        const newPrice = +(prev + variation).toFixed(2);
        setIsFlashing(true);
        setTimeout(() => setIsFlashing(false), 500);
        return newPrice;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const calculatePrice = () => {
    const weightNum = parseFloat(weight);
    const caratNum = parseInt(carat);
    if (!weightNum || !caratNum) return;

    const weightInGrams = weightUnit === 'oz' ? weightNum * 31.1035 : weightNum;
    const value = (weightInGrams * (caratNum/24) * livePrice) / 31.1035;
    setPrice(+value.toFixed(2));
  };

  return (
    <>
      {/* Live Price Banner */}
      <div className={`bg-[#D4AF37] p-3 sm:p-4 text-center transition-all duration-300 ${isFlashing ? 'bg-opacity-90 scale-[1.02]' : ''}`}>
        <div className="container mx-auto flex items-center justify-center gap-2">
          <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-[#1A1A1A]" />
          <span className="text-base sm:text-xl font-bold text-[#1A1A1A]">Live Gold Price: ${livePrice.toFixed(2)}/oz</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-[#D4AF37] mb-8 sm:mb-12 tracking-tight">
          Gold Price Per Gram 9ct
        </h1>

        {/* Calculator Card */}
        <div className="max-w-2xl mx-auto bg-[#242424] rounded-xl sm:rounded-2xl shadow-2xl shadow-[#D4AF37]/10 p-6 sm:p-8 mb-12 sm:mb-16 border border-[#D4AF37]/20">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37]" />
            <h2 className="text-xl sm:text-2xl font-semibold text-[#D4AF37]">Gold Calculator</h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Carat Selection */}
            <div>
              <label className="block text-sm font-medium text-[#D4AF37] mb-2 sm:mb-3">
                1. Choose Your Carat Value
              </label>
              <select
                value={carat}
                onChange={(e) => setCarat(e.target.value)}
                className="w-full p-3 sm:p-4 bg-[#1A1A1A] text-[#D4AF37] border border-[#D4AF37]/20 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-200"
              >
                <option value="9">9ct</option>
                <option value="14">14ct</option>
                <option value="18">18ct</option>
                <option value="22">22ct</option>
                <option value="24">24ct</option>
              </select>
            </div>

            {/* Weight Input */}
            <div>
              <label className="block text-sm font-medium text-[#D4AF37] mb-2 sm:mb-3">
                2. Enter the Weight
              </label>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="relative flex-1">
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter weight"
                    className="w-full p-3 sm:p-4 bg-[#1A1A1A] text-[#D4AF37] border border-[#D4AF37]/20 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="flex rounded-lg sm:rounded-xl overflow-hidden border border-[#D4AF37]/20">
                  <button
                    onClick={() => setWeightUnit('g')}
                    className={`flex-1 sm:flex-none px-4 py-2 font-medium transition-colors duration-200 ${
                      weightUnit === 'g'
                        ? 'bg-[#D4AF37] text-[#1A1A1A]'
                        : 'bg-[#1A1A1A] text-[#D4AF37] hover:bg-[#2A2A2A]'
                    }`}
                  >
                    Grams
                  </button>
                  <button
                    onClick={() => setWeightUnit('oz')}
                    className={`flex-1 sm:flex-none px-4 py-2 font-medium transition-colors duration-200 ${
                      weightUnit === 'oz'
                        ? 'bg-[#D4AF37] text-[#1A1A1A]'
                        : 'bg-[#1A1A1A] text-[#D4AF37] hover:bg-[#2A2A2A]'
                    }`}
                  >
                    Ounces
                  </button>
                </div>
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculatePrice}
              className="w-full bg-[#D4AF37] text-[#1A1A1A] py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-[#C4A137] transition-all duration-200 transform hover:scale-[1.02]"
            >
              Calculate
            </button>

            {/* Result */}
            {price > 0 && (
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[#1A1A1A] rounded-lg sm:rounded-xl border border-[#D4AF37]/20">
                <div className="text-center">
                  <p className="text-sm sm:text-base text-[#D4AF37]/60 mb-2">Approximate Price (in USD)</p>
                  <p className="text-4xl sm:text-5xl font-bold text-[#D4AF37]">${price}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Live Gold Price Board */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="bg-[#242424] rounded-xl sm:rounded-2xl shadow-2xl shadow-[#D4AF37]/10 overflow-hidden border border-[#D4AF37]/20">
            <div className="bg-[#D4AF37] p-3 sm:p-4">
              <h2 className="text-xl sm:text-2xl font-bold text-center text-[#1A1A1A]">Live Gold Price Board (USD)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#1A1A1A]">
                    <th className="py-3 sm:py-4 px-4 sm:px-6 text-left text-[#D4AF37] font-semibold text-sm sm:text-base">Type</th>
                    <th className="py-3 sm:py-4 px-4 sm:px-6 text-right text-[#D4AF37] font-semibold text-sm sm:text-base">Price per Gram</th>
                    <th className="py-3 sm:py-4 px-4 sm:px-6 text-right text-[#D4AF37] font-semibold text-sm sm:text-base">Price per Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {priceData.map((item, index) => (
                    <tr key={index} className="border-t border-[#D4AF37]/10 hover:bg-[#1A1A1A] transition-colors">
                      <td className="py-3 sm:py-4 px-4 sm:px-6 text-[#D4AF37] text-sm sm:text-base">{item.type}</td>
                      <td className="py-3 sm:py-4 px-4 sm:px-6 text-right text-[#D4AF37] text-sm sm:text-base">
                        {item.pricePerGram ? `$${item.pricePerGram.toFixed(2)}/g` : '-'}
                      </td>
                      <td className="py-3 sm:py-4 px-4 sm:px-6 text-right text-[#D4AF37] text-sm sm:text-base">
                        {`$${item.pricePerOz.toFixed(2)}${item.special ? (item.unit ? `/${item.unit}` : '/Bar') : '/oz'}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="max-w-3xl mx-auto text-[#D4AF37]/90 text-sm sm:text-base">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#D4AF37] mb-6 sm:mb-8">How to utilize the calculator</h2>
          
          <p className="mb-6 sm:mb-8 leading-relaxed">Do you possess gold jewelry or scrap gold that you wish to sell and need to assess its value? Our scrap gold calculator is an instrument that employs real-time USD gold pricing to determine the worth of gold based on the given weight and karat grade. If you have knowledge of your gold's weight and its purity (carat), simply input those figures into the calculator above and hit the calculate button to receive an immediate estimation of gold value.</p>

          <h3 className="text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-3 sm:mb-4">About the current gold price</h3>
          <p className="mb-6 sm:mb-8 leading-relaxed">The current live price of gold in the US is ${livePrice.toFixed(2)} (ozt). We utilize the current, live US gold price to ascertain the karat value of gold. Our real-time gold pricing is obtained from various gold price sources, including <a href="https://www.kitco.com/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">Kitco</a> and <a href="https://www.investing.com/currencies/xau-usd" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">investing.com</a>.</p>

          <h3 className="text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-3 sm:mb-4">How do we determine the final gold value?</h3>
          <p className="mb-6 sm:mb-8 leading-relaxed">By taking into account the specified karat and grams of your gold alongside the real-time gold price, the gold calculator multiplies the carat price of gold by the provided weight. The outcome is a nearly precise valuation of your gold. Gold purchasers employ the same formula when acquiring gold.</p>

          <h3 className="text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-3 sm:mb-4">What gold items am I able to sell?</h3>
          <p className="mb-6 sm:mb-8 leading-relaxed">Anything composed of genuine gold! This includes rings, gold bars, gold coins, necklaces, bracelets, earrings, and scrap gold and jewelry.</p>

          <h3 className="text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-3 sm:mb-4">I'm prepared to sell my gold!</h3>
          <p className="mb-6 sm:mb-8 leading-relaxed">Numerous locations purchase gold - <a href="https://www.google.com/search?q=sell+gold" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">Click here</a> to discover your nearest Gold Broker now. Remember to check reviews to ensure they are reputable.</p>
        </div>
      </div>
    </>
  );
}

export default Home;