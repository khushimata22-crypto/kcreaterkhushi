import React, { useRef } from 'react';
import { X, Upload, RotateCcw, Check, Sparkles, Image as ImageIcon } from 'lucide-react';
import { useBrandImages, ImageAssets } from '../context/ImageContext';

export const ImageManagerModal: React.FC = () => {
  const { images, updateImage, resetImages, isManagerOpen, setIsManagerOpen } = useBrandImages();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const activeKeyRef = useRef<keyof ImageAssets | null>(null);

  if (!isManagerOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeKeyRef.current) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          updateImage(activeKeyRef.current!, reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = (key: keyof ImageAssets) => {
    activeKeyRef.current = key;
    fileInputRef.current?.click();
  };

  const imageSlots: {
    key: keyof ImageAssets;
    title: string;
    requirement: string;
    currentSrc: string;
    aspectRatio: string;
  }[] = [
    {
      key: 'kCreatorLogo',
      title: '1. K Creator Main Brand Logo',
      requirement: 'Used in Header & Footer brand identity.',
      currentSrc: images.kCreatorLogo,
      aspectRatio: '1/1',
    },
    {
      key: 'heroPromo',
      title: '2. AI Creator Khushi Promotional Image',
      requirement: 'Used in Hero/Introduction section and Portfolio.',
      currentSrc: images.heroPromo,
      aspectRatio: '16/9',
    },
    {
      key: 'aiCreatorLogo',
      title: '3. AI Creator Khushi Logo Emblem',
      requirement: 'Used in Branding/About section and Portfolio.',
      currentSrc: images.aiCreatorLogo,
      aspectRatio: '1/1',
    },
    {
      key: 'khushiPortrait',
      title: '4. Professional Khushi Mata Portrait',
      requirement: 'Used in About Me section exactly as provided.',
      currentSrc: images.khushiPortrait,
      aspectRatio: '3/4',
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl rounded-3xl glass-panel bg-[#120a26] border border-purple-500/30 p-6 sm:p-8 shadow-2xl my-8">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          accept="image/*"
          className="hidden"
        />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-6 border-b border-purple-500/15">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/60 border border-purple-500/30 text-amber-300 flex items-center justify-center">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-white">
                Official Image Asset Manager
              </h3>
              <p className="text-xs text-slate-300">
                Verified high-resolution originals for Khushi Mata & K Creator
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsManagerOpen(false)}
            className="p-2 rounded-xl bg-purple-950/40 hover:bg-purple-900/60 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Rules note */}
        <div className="mt-4 p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs text-purple-200 leading-relaxed">
          <strong className="text-amber-300">Preservation Rule Active:</strong> All 4 images are configured to display your exact original graphics without modification or AI redraw. You can drop or select files directly to ensure your exact high-res photos are stored.
        </div>

        {/* Slots Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {imageSlots.map((slot) => (
            <div
              key={slot.key}
              className="p-4 rounded-2xl bg-[#0c071b] border border-purple-500/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold text-white">{slot.title}</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-900/60 text-purple-300">
                    Active
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mb-3">{slot.requirement}</p>

                <div
                  className="w-full rounded-xl overflow-hidden bg-black/50 border border-purple-500/10 mb-3 flex items-center justify-center"
                  style={{ maxHeight: '140px' }}
                >
                  <img
                    src={slot.currentSrc}
                    alt={slot.title}
                    className="max-h-32 object-contain"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => triggerUpload(slot.key)}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-purple-900/60 hover:bg-purple-800/80 border border-purple-500/30 transition-colors cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Exact File</span>
              </button>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center justify-between">
          <button
            type="button"
            onClick={resetImages}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default SVGs</span>
          </button>

          <button
            type="button"
            onClick={() => setIsManagerOpen(false)}
            className="px-6 py-2 rounded-xl font-bold text-xs text-white bg-purple-600 hover:bg-purple-500 transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
