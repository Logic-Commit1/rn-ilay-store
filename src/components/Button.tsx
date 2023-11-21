interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button
      className="cta-button"
      style={{
        display: 'none',
        padding: '1.25rem',
        borderRadius: '10px',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'var(--ion-color-primary)',
        position: 'fixed',
        bottom: '20px',
        right: '20px'
      }}
    >
      {label}
    </button>
  );
};

export default Button;
