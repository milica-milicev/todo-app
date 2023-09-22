function Button({ children, onClick, type, className }) {
  const base =
    'bg-gray-700 text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 rounded-md text-sm px-4 py-2 mr-2 mb-2 ease-in-out duration-300 md:text-base';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    icon: base + ' flex items-center gap-2',
    small: base + ' ' + className + ' px-3 py-3',
    secondary: base + ' ' + className + ' !bg-blue-500 hover:!bg-purple-600',
  };
  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
