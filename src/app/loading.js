export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-warm-beige/80 backdrop-blur-sm">
      <div className="w-16 h-16 border-4 border-coffee/20 border-t-coffee rounded-full animate-spin"></div>
    </div>
  );
} 