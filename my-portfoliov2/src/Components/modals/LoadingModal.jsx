import '../css/loadingAnimation.css';

function LoadingModal({showLoading = 'hidden'}) {

  return (
    <section className={`loading-container ${showLoading}`}>
      <svg width="120" height="120" viewBox="0 0 100 100">
        <circle
          className="loading-circle"
          cx="50"
          cy="50"
          r="45"
        />
      </svg>
    </section>
  );
}

export default LoadingModal;
