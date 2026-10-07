import React, { useState } from 'react';
import { Maximize2, AlertCircle } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  aspectRatio?: string;
  priority?: boolean;
  allowZoom?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc,
  aspectRatio,
  priority = false,
  allowZoom = true,
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);

  // Sync if prop changes
  React.useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div
        className={`relative overflow-hidden group ${aspectRatio || ''} ${className}`}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        {/* Loading shimmer */}
        {isLoading && (
          <div className="absolute inset-0 bg-slate-900/60 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-purple-500/30 border-t-purple-500 animate-spin" />
          </div>
        )}

        {hasError ? (
          <div className="w-full h-full min-h-[160px] bg-gradient-to-br from-[#120a2a] via-[#1a103c] to-[#0c081e] flex flex-col items-center justify-center p-6 text-center border border-purple-500/20 rounded-xl">
            <AlertCircle className="w-8 h-8 text-amber-400 mb-2 opacity-80" />
            <p className="text-xs font-semibold text-slate-200 tracking-wide">{alt}</p>
            <span className="text-[11px] text-purple-300/70 mt-1">K Creator Visual Asset</span>
          </div>
        ) : (
          <>
            <img
              src={currentSrc}
              alt={alt}
              referrerPolicy="no-referrer"
              loading={priority ? 'eager' : 'lazy'}
              onLoad={() => setIsLoading(false)}
              onError={handleError}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
            />

            {allowZoom && !isLoading && !hasError && (
              <button
                type="button"
                onClick={() => setIsZoomed(true)}
                className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white/80 hover:text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg cursor-pointer"
                title="View full resolution"
                aria-label={`View ${alt} full size`}
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            )}
          </>
        )}
      </div>

      {/* Lightbox Zoom Modal */}
      {isZoomed && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentSrc}
              alt={alt}
              className="max-h-[80vh] w-auto object-contain rounded-2xl shadow-2xl border border-purple-500/30"
            />
            <div className="mt-4 flex items-center justify-between w-full text-slate-300 text-xs px-2">
              <span className="font-medium text-slate-200">{alt}</span>
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
