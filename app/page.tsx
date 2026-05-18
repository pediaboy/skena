      {/* Rincian per Emiten */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Portofolio Anda</h2>
        
        {/* Card Saham PGAS */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm mb-4 border border-gray-100 dark:border-slate-700">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h3 className="font-bold text-lg">PGAS</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">PGAS</p>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded text-xs font-bold">
              +18.39%
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Lot</p>
              <p className="font-semibold">160</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Harga Rata-rata</p>
              <p className="font-semibold">Rp 1.419</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Harga Sekarang</p>
              <p className="font-semibold">Rp 1.680</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Stock Value</p>
              <p className="font-semibold">Rp 22.705.000</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-700 flex justify-between items-center">
            <p className="text-sm font-semibold">Untung/Rugi</p>
            <p className="text-sm font-bold text-green-600 dark:text-green-400">+Rp 4.175.000</p>
          </div>
        </div>

        {/* Lu bisa copas card PGAS di atas buat bikin yang TLKM, tinggal ganti angka sama warnanya jadi merah (loss) */}
        
      </div>
